// eslint-disable-next-line no-unused-vars
const webpack = require('webpack')
const path = require('path')
const fs = require('fs')

const componentPaths = fs
  .readdirSync(path.resolve(__dirname, './src/components'))
  .reduce((obj, item) => {
    return {
      ...obj,
      [item]: path.resolve(__dirname, `./src/components/${item}/index.tsx`)
    }
  }, {})

module.exports = {
  entry: componentPaths,

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'MyLibrary.[name].js',
    library: ['MyLibrary', '[name]'],
    libraryTarget: 'umd'
  },
  resolve: {
    // eslint-disable-next-line global-require
    alias: { '@': path.resolve(__dirname, './src') }
  },
  target: 'node',

  module: {
    rules: [
      {
        // config for es6 jsx
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/react'],
          plugins: ['@babel/plugin-proposal-class-properties']
        }
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: '/node_modules/'
      },
      {
        // config for images
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      {
        // config for fonts
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: 'css-loader'
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true
            }
          },
          {
            loader: 'sass-loader'
          }
        ],
        // include: path.resolve(__dirname, './src'),
        exclude: path.resolve(__dirname, './node_modules')
      }
    ]
  },

  // Useful for debugging.
  devtool: 'source-map',

  // By default webpack logs warnings if the bundle is bigger than 200kb.
  performance: { hints: false },
  externals: {
    // Don't bundle react or react-dom
    react: {
      commonjs: 'react',
      commonjs2: 'react',
      amd: 'React',
      root: 'React'
    },
    'react-dom': {
      commonjs: 'react-dom',
      commonjs2: 'react-dom',
      amd: 'ReactDOM',
      root: 'ReactDOM'
    }
  }
}
