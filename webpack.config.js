const path = require('path')
const webpack = require('webpack')
const WebPackCleaner = require('clean-webpack-plugin')
const HTMLPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const extractPlugin = new ExtractTextPlugin({
  filename: './assets/css/app.css',
})

const config = {
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    stats: 'errors-only',
    open: true,
    port: 12000,
    compress: true,
    historyApiFallback: true,
  },

  devtool: 'inline-source-map',

  context: path.resolve(__dirname, 'src'),

  entry: ['./app.js'],

  output: {
    filename: 'bundle.js',
    // Output path using nodeJs path module
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
  },

  plugins: [new WebPackCleaner(['dist']), new HTMLPlugin({template: 'index.html'}), extractPlugin],

  module: {
    rules: [
      // JS Bundler
      {
        test: /\.js$/,
        include: /src/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['env', {useBuiltIns: true}], 'react'],
            plugins: ['transform-runtime', 'transform-class-properties', 'transform-object-rest-spread'],
          },
        },
      },
      {
        test: /\.html/,
        use: ['html-loader'],
      },
      // File Loader (for images)
      {
        test: /\.(png|jpg|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: './assets/media/',
            },
          },
        ],
      },
      //file-loader(for fonts)
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: ['file-loader'],
      },
      //SASS / CSS Loader
      {
        test: /\.scss$/,
        include: [path.resolve(__dirname, 'src')],
        use: extractPlugin.extract({
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: true,
              },
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMape: true,
              },
            },
          ],
          fallback: 'style-loader',
        }),
      },
    ],
  },
}

module.exports = config
