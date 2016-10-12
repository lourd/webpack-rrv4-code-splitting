const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    app: './src/index.js',
  },
  output: {
    path: path.join(__dirname, './docs'),
    filename: "[name].[chunkhash:6].js",
    chunkFilename: "chunk.[id].[chunkhash:6].js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
      },
      {
        test: /\.css?$/,
        loaders: ['style', 'css'],
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Code Splitting',
    }),
  ],
  devServer: {
    contentBase: './docs',
    progress: true,
  }
}
