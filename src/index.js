import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import DOMLoadedContextProvider from './context/DOMLoadedContext';
import BurgerMenuContextProvider from './context/BurgerMenuContext';
import MovieApiContextProvider from './context/MovieApiContext';
import './assets/vendor/css/slick.css';
import './assets/vendor/css/slick-theme.css';
import './fonts.css';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DOMLoadedContextProvider>
    <BurgerMenuContextProvider>
      <MovieApiContextProvider>
        <App />
      </MovieApiContextProvider>
    </BurgerMenuContextProvider>
    </DOMLoadedContextProvider>
  </BrowserRouter>
);

