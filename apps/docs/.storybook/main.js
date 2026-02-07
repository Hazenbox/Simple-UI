import { join, resolve } from "path";

/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: ["../stories/*.stories.tsx", "../stories/**/*.stories.tsx"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-mcp",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  async viteFinal(config) {
    const tailwindcss = await import("@tailwindcss/vite");
    config.plugins = config.plugins || [];
    config.plugins.unshift(tailwindcss.default());

    // Set Vite root to project root to ensure correct path resolution
    // Storybook runs from apps/docs, so go up one level to get to project root
    config.root = resolve(process.cwd(), "..");

    config.resolve = config.resolve || {};
    let alias = config.resolve.alias || [];

    // Ensure alias is an array for regex support
    if (!Array.isArray(alias)) {
      alias = Object.entries(alias).map(([find, replacement]) => ({ find, replacement }));
    }

    // Resolve path from project root (now set in config.root)
    const uiSrc = resolve(config.root, "packages/ui/src");

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
