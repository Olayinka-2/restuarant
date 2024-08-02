const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { type } = require('os');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index.js',
    about: './src/js/about.js',
    contact: './src/js/contact.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }, 
      {
        test: /\.(png|svg|jpeg|gif|woff2)$/i,
        type: 'asset/resource'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant - home',
      filename: 'index.html',
      template: 'src/page/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'Restaurant - about',
      filename: 'about.html',
      template: 'src/page/about.html',
      chunks: ['about']
    }),
    new HtmlWebpackPlugin({
      title: 'Restaurant- contact',
      filename: 'contact.html',
      template: 'src/page/contact.html',
      chunks: ['contact']
    }),
  ]
}