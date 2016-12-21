const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: [
    path.resolve('src/index.js'),
  ],
  output: {
    path: path.resolve('docs'),
    filename: '[name].[chunkhash:6].js',
    chunkFilename: 'chunk[id].[chunkhash:6].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve('src'),
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: path.resolve('src/index.html'),
    }),
  ],
}
