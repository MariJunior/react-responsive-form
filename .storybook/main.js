const path = require("path");

const BASE_URL = process.env.STORYBOOK_BASE_URL;
const baseTag = BASE_URL ? `<base href="${BASE_URL}">` : '';
const toPath = (_path) => path.join(process.cwd(), _path);

module.exports = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|ts|tsx)",
    "../pages/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  managerHead: head => [head, baseTag].filter(Boolean).join("\n"),
  webpackFinal: async (config, { configType }) => {
    config.resolve.modules = [path.resolve(__dirname, '..'), 'node_modules'];
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../'),
      "@emotion/core": toPath("node_modules/@emotion/react"),
      "@emotion/styled": toPath("node_modules/@emotion/styled"),
      "emotion-theming": toPath("node_modules/@emotion/react"),
    };

    return config;
  },
}
