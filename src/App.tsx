import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { HomePageAsync } from "./pages/HomePage/HomePage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Suspense, useContext, useState } from "react";

import './styles/index.scss';
import { useTheme } from "./theme/useTheme";
import { classNames } from "./helpers/classNames/classNames";


export enum Theme {
  LIGHT = 'light',
  DARK = 'dark'
}

const App = () => {

    const {theme, toggleTheme} = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Сменить тему</button>
            <Link to={"/"}>Домой</Link>
            <Link to={"/about"}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/" element={<HomePageAsync/>}/>
                    <Route path="/about" element={<AboutPageAsync/>}/>
                </Routes>
            </Suspense>
        </div>
  )
}

export default App;