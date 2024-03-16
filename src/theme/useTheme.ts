import { useContext } from "react";
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from "./ThemeContext";


//Этот хук достает из контекста тему, а также возвращает функцию для ее изменения

interface useThemeResult {
    toggleTheme: () => void;
    theme: Theme
}

export function useTheme() : useThemeResult {
    const {theme, setTheme} = useContext(ThemeContext);
    
    const toggleTheme = () => {
        const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;

        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);

        setTheme(newTheme);
      }

    return {
        toggleTheme,
        theme
    }
}