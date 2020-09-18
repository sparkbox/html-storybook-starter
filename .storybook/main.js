module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/preset-scss"
  ],
  webpackFinal: async (config) => {
    config.module.rules.push(
      {
        test: /\.handlebars|hbs$/,
        loader: "handlebars-loader"
      }
    )

    return config;
  }
}
