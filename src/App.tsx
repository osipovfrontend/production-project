import { Route, Routes, Link } from 'react-router-dom';
import Counter from "./components/Counter";
import './styles/index.scss';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { Suspense, useContext, useState } from 'react';
import { Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './styles/themes/useTheme';
import { classNames } from './helpers/classNames/classNames';

const App = () => {
    const {theme, toggleTheme} = useTheme();
    return (
        <div className={classNames('app', {hovered: true, selected: false}, [theme])}>
            <button onClick={toggleTheme}>TOGGLE</button>
            <Link to={'/'}>Главная</Link>
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync />}/>
                    <Route path={'/'} element={ <MainPageAsync />}/>
                </Routes>
            </Suspense>
            <Counter />
        </div>
    );
};

export default App;
