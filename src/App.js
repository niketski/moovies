import { useEffect } from 'react';
import MainRoutes from './Routes';
import { Link } from 'react-router-dom';
import Header from './components/blocks/header/Header';
import Footer from './components/blocks/footer/Footer';

function App() {

  return (
    <>
      <Header/>
      <MainRoutes/>
      <Footer/>
    </>
  );
}

export default App;
