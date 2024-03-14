import webpack from "webpack";
import { BuildOptions, BuildPaths } from "./types/config";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { buildResolves } from "./buildResolves";
import { buildDevServer } from "./buildDevServer";

export function buildWebpackConfig(options: BuildOptions) : webpack.Configuration {
    const {mode, paths, isDev} = options;
    return {
        mode, // режим разработки
        entry: paths.entry, // Входная точка
        output: {
          path: paths.build, // Выходная точка
          filename: '[name].[contenthash].js',
          clean: true
        },
        plugins: buildPlugins(options), //массив плагинов
        module: {
          rules: buildLoaders(options),
        },
        resolve: buildResolves(),
        devtool: isDev ? 'inline-source-map' : undefined,
        devServer: isDev ? buildDevServer(options) : undefined,

    }
}