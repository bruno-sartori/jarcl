const path = require('path');

module.exports = async ({ config }) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [
      {
        loader: 'style-loader',
      },
      {
        loader: 'css-loader',
        options: {
          importLoaders: 1,
          modules: true,
          modules: {
            localIdentName: '[local]',
          },
        },
      },
      {
        loader: 'sass-loader',
      },
    ],
    include: path.resolve(__dirname, './stories'),
    exclude: path.resolve(__dirname, '../node_modules'),
  });

  return config;
};
