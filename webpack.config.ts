// т.к. в разных ОС работа пути работают по разному, лучше использовать специальные инструменты
// webpack работает в среде nodeJS и нам доступен модуль path
// функция resolve позволяет "склеивать" участки пути
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const config: webpack.Configuration = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  output: {
      filename: '[name].[contenthash].js',
      path: path.resolve(__dirname, 'build'),
      clean: true,
  },
  plugins: [
      // HTMLWebpackPlugin - это класс, поэтому для работы с ним нам нужно создать объект этого класса
      new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html')
      }),
      new webpack.ProgressPlugin(),
  ],
  module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/,
        },
      ],
    },
  resolve: {
  extensions: ['.tsx', '.ts', '.js'],
  },
};

export default config;