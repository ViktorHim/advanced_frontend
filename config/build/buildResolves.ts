import webpack from "webpack";

export function buildResolves() : webpack.ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],// Файлы для которых не надо указывать расширения для подключения (файлы с исходным кодом)
      }
}