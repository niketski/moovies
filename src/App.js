import { useEffect, useRef, useState, useContext } from 'react';
import MainRoutes from './Routes';
import { Link, useLocation } from 'react-router-dom';
import { DOMLoadedContext } from './context/DOMLoadedContext';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';

function App() {
  const DOMLoadedCtx    = useContext(DOMLoadedContext);
  let currentPageClass  = DOMLoadedCtx.currentPageClass;
  let wrapperPaddingTop = DOMLoadedCtx.wrapperPaddingTop;

  if(currentPageClass === 'details') {

    wrapperPaddingTop = 0;

  }

  return (
    <div className={`mainWrapper ${currentPageClass === '' ? 'home' : currentPageClass}`} style={{ paddingTop: `${wrapperPaddingTop}px` }}>

      <Header/>
      <MainRoutes/>
      <Footer/>

    </div>
  );
}

export default App;
