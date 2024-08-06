const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { type } = require('os');

module.exports = {
  mode: 'development',
  entry: {
    index: './src/js/index/index.js',
    menu: './src/js/menu.js',
    contact: './src/js/contact.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name][contenthash].js',
    clean: true,
    assetModuleFilename: '[name][ext]'
  },
  devServer: {
    static: './dist', // Directory to serve static files from
    port: 3000, // Port to listen on
    open: true, // Open the browser automatically
    hot: true // Enable Hot Module Replacement
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
        type: 'asset/resource',
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Restaurant - home',
      filename: 'index.html',
      template: 'src/page/index.html',
      chunks: ['index']
    }),
    new HtmlWebpackPlugin({
      title: 'Restaurant - menu',
      filename: 'menu.html',
      template: 'src/page/menu.html',
      chunks: ['menu']
    }),
    new HtmlWebpackPlugin({
      title: 'Restaurant- contact',
      filename: 'contact.html',
      template: 'src/page/contact.html',
      chunks: ['contact']
    }),
  ]
}