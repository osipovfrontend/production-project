import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise(resolve => {
    // @ts-ignore
    // в реальности так делать нельзя!
   setTimeout(() => resolve(import('./AboutPage')), 1500) 
}));