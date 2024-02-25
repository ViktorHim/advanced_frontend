const path = require('path');// Подключение модулей
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


module.exports = {
  mode: "development", // режим разработки
  entry: path.resolve(__dirname, 'src', 'index.js'), // Входная точка
  output: {
    path: path.resolve(__dirname, 'build'), // Выходная точка
    filename: '[name].[contenthash].js',
    clean: true
  },
  plugins: [ //массив плагинов
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.ProgressPlugin()
  ] 
};