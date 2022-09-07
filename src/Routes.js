import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import TvSeries from './pages/TvSeries/TvSeries';
import Contact from './pages/Contact/Contact';
import Genres from './pages/Genres/Genres';
import UpcomingMovies from './pages/UpcomingMovies/UpcomingMovies';

const MainRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/tv-series' element={<TvSeries/>}/>
            <Route path='/genres' element={<Genres/>}/>
            <Route path='/upcoming-movies' element={<UpcomingMovies/>}/>
            <Route path='/contact' element={<Contact/>}/>
        </Routes>
    );

};

export default MainRoutes;