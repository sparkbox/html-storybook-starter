module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
    // {
    //   name: "@storybook/preset-scss",
    //   options: {
    //     sassLoaderOptions: {
    //        implementation: require('sass'),
    //        sourceMap: true
    //     }
    //   }
    // }
  ]
}
