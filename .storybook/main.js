const path = require('path');

module.exports = {
  "stories": [
    "./**/*.stories.mdx",
    "./**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      include: path.resolve(__dirname, '../'),
    });

    // specific alias for sass
    config.resolve.alias['images'] = path.resolve(__dirname, '../src/assets/images/');
    config.resolve.alias['styles'] = path.resolve(__dirname, '../src/styles/');


    // Return the altered config
    return config;
  },
}
