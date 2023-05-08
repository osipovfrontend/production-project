// т.к. в разных ОС работа пути работают по разному, лучше использовать специальные инструменты
// webpack работает в среде nodeJS и нам доступен модуль path
// функция resolve позволяет "склеивать" участки пути
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildPaths } from './config/build/types/config';
import path from "path";

const paths: BuildPaths = {
  entry: path.resolve(__dirname, 'src', 'index.ts'),
  build: path.resolve(__dirname, 'build'),
  html: path.resolve(__dirname, 'public', 'index.html')
}

const mode = 'development';
const isDev = mode === 'development';

const config: webpack.Configuration = buildWebpackConfig({
  mode: 'development',
  paths,
  isDev
});

export default config;