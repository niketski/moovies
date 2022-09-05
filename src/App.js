import { useEffect, useRef, useState, useContext } from 'react';
import MainRoutes from './Routes';
import { Link } from 'react-router-dom';
import { DOMLoadedContext } from './context/DOMLoaded';
import Header from './components/blocks/header/Header';
import Footer from './components/blocks/footer/Footer';

function App() {
  const DOMLoadedCtx = useContext(DOMLoadedContext);
  const wrapperPaddingTop = DOMLoadedCtx.wrapperPaddingTop;

  return (
    <div className="mainWrapper" style={{ paddingTop: `${wrapperPaddingTop}px` }}>

      <Header/>
      <MainRoutes/>
      <Footer/>

    </div>
  );
}

export default App;
