import path from 'path';// Подключение модулей
import webpack from 'webpack';
import HtmlWebpackPlugin  from 'html-webpack-plugin';

const config : webpack.Configuration = {
  mode: "development", // режим разработки
  entry: path.resolve(__dirname, 'src', 'index.ts'), // Входная точка
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
  ],
  module: {
    rules: [//Лоадеры
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],// Файлы для которых не надо указывать расширения для подключения (файлы с исходным кодом)
  },
};

export default config;