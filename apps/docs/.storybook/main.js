import { join, resolve } from "path";
import { fileURLToPath } from "url";

// Get the directory of this config file (ESM-safe)
const configDir = fileURLToPath(new URL(".", import.meta.url));

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(config) {
    const tailwindcss = await import("@tailwindcss/vite");
    config.plugins = config.plugins || [];
    config.plugins.unshift(tailwindcss.default());

    config.resolve = config.resolve || {};
    let alias = config.resolve.alias || [];

    // Ensure alias is an array for regex support
    if (!Array.isArray(alias)) {
      alias = Object.entries(alias).map(([find, replacement]) => ({ find, replacement }));
    }

    // Resolve path from config file location: .storybook -> docs -> root -> packages/ui/src
    const uiSrc = resolve(configDir, "../../../packages/ui/src");

    alias.unshift(
      {
        find: /^@acme\/ui$/,
        replacement: join(uiSrc, "index.ts"),
      },
      {
        find: /^@acme\/ui\/(.*)$/,
        replacement: join(uiSrc, "$1"),
      }
    );

    config.resolve.alias = alias;

    // Exclude @acme/ui from optimizeDeps to prevent esbuild pre-bundling
    config.optimizeDeps = config.optimizeDeps || {};
    config.optimizeDeps.exclude = config.optimizeDeps.exclude || [];
    config.optimizeDeps.exclude.push("@acme/ui");

    // Include common dependencies that @acme/ui uses to ensure they're pre-bundled
    config.optimizeDeps.include = config.optimizeDeps.include || [];
    config.optimizeDeps.include.push(
      "clsx",
      "tailwind-merge",
      "lucide-react"
    );

    // Allow Vite to serve files from the entire monorepo root
    // (needed for stories, ui source, and node_modules)
    const monorepoRoot = resolve(configDir, "../../..");
    config.server = config.server || {};
    config.server.fs = config.server.fs || {};
    config.server.fs.allow = config.server.fs.allow || [];
    config.server.fs.allow.push(monorepoRoot);

    // Ensure CSS files are properly handled
    config.css = config.css || {};
    config.css.postcss = config.css.postcss || {};

    return config;
  },

  docs: {
    autodocs: true,
  },
};

export default config;
