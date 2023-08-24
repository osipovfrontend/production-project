import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // в реальности так делать нельзя!
   setTimeout(() => resolve(import('./MainPage')), 1500) 
}));