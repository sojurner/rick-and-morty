const path = require('path'),
  HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/[name].bundle.js'
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'awesome-typescript-loader',
        exclude: /node_modules/
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
    ]
  },
  plugins: [new HtmlWebpackPlugin({ template: './public/index.html' })]
};
