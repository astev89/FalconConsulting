const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const ExtractCSS = new ExtractTextPlugin({
  filename: 'main.css'
})

const babelEntry = (p) => ['babel-polyfill', path.resolve(__dirname, p)]
module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: {
    main: babelEntry('./src/main')
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, './src')
        ],
        exclude: [
          path.resolve(__dirname, './node_modules')
        ],
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ExtractCSS.extract({
          fallback: 'style-loader',
          use: [{loader: 'css-loader', options: {importLoaders: 1}}, 'postcss-loader', 'sass-loader']
        }),
        include: path.resolve(__dirname, './src')
      }
    ]
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, './src/components'),
      main: path.resolve(__dirname, './src/main'),
      images: path.resolve(__dirname, './src/images')
    }
  },
  target: 'web',
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new HtmlWebpackPlugin({
      filename: './index.html',
      template: './template.js',
      favicon: './images/favicon.ico',
      inject: 'body'
    }),
    ExtractCSS
  ],
  devtool: 'source-map',
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    publicPath: '/',
    port: 8000,
    historyApiFallback: {
      rewrites: [
          // shows favicon
          { from: /favicon.ico/, to: './favicon.ico' }
      ]
    },
  }
}
