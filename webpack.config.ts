// т.к. в разных ОС работа пути работают по разному, лучше использовать специальные инструменты
// webpack работает в среде nodeJS и нам доступен модуль path
// функция resolve позволяет "склеивать" участки пути
import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/config';
import path from "path";

export default (env: BuildEnv) => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  }
  
  const mode = env.mode || 'development';
  const PORT = env.port || 3000;

  const isDev = mode === 'development';
  
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port: PORT,
  });

  return config;
};