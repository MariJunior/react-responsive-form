const BASE_URL = process.env.STORYBOOK_BASE_URL;
const baseTag = BASE_URL ? `<base href="${BASE_URL}">` : '';

module.exports = {
  "stories": [
    "../stories/**/*.stories.mdx",
    "../stories/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-knobs",
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  managerHead: head => [head, baseTag].filter(Boolean).join("\n"),
}
