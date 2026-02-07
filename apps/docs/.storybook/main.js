import { join, resolve } from "path";

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

    const uiSrc = resolve(process.cwd(), "../../packages/ui/src");

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

    return config;
  },

  docs: {
    autodocs: true,
  },
};

export default config;
