import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import TvSeries from './pages/TvSeries';
import Contact from './pages/Contact';

const MainRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/tv-series' element={<TvSeries/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    );

};

export default MainRoutes;