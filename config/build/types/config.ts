export type BuildMode = 'production' | 'development'; //Тип сборки

export interface BuildPaths { // интерфейс для путей
    entry: string;
    build: string;
    html: string;
}

export interface BuildEnv {
    mode: BuildMode,
    port: number
}

export interface BuildOptions {// интерфейс для настроек сборки
    mode: BuildMode;
    paths: BuildPaths;
    isDev: boolean;
    port: number
}