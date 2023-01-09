import { Routes, Route } from 'react-router-dom';

// pages
import Home from './pages/Home/Home';
import Movies from './pages/Movies/Movies';
import TvSeries from './pages/TvSeries/TvSeries';
import UpcomingMovies from './pages/UpcomingMovies/UpcomingMovies';
import DetailsPage from './components/layout/details-page/DetailsPage';

const MainRoutes = () => {

    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movies' element={<Movies/>}/>
            <Route path='/tv-series' element={<TvSeries/>}/>
            <Route path='/upcoming-movies' element={<UpcomingMovies/>}/>
            <Route path='/details/:type/:id' element={<DetailsPage/>}/>
        </Routes>
    );

};

export default MainRoutes;