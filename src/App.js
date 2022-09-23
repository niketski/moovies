import { useEffect, useRef, useState, useContext } from 'react';
import MainRoutes from './Routes';
import { Link, useLocation } from 'react-router-dom';
import { DOMLoadedContext } from './context/DOMLoadedContext';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import apiConfig from './api/tmdb-api.config';
import TMDBApi from './api/tmdb-api';
const movieApi = new TMDBApi();
const { movieType } = apiConfig;

function App() {
  const DOMLoadedCtx    = useContext(DOMLoadedContext);
  let currentPageClass  = DOMLoadedCtx.currentPageClass;
  let wrapperPaddingTop = DOMLoadedCtx.wrapperPaddingTop;
  const [movies, setMovies] = useState(null);
  const [num, setNum] = useState(1);
  // const [currentVideo, setCurrentVideo] = useEffect(null);

  if(currentPageClass === 'details') {

    wrapperPaddingTop = 0;

  }

  useEffect(() => {

    const getMovies = async () => {
      const reponse = await movieApi.getMovies();
      const data    = await reponse.json();
      // const movie   = data.results[0];
      // const poster   = movieApi.getImagePosterUrl(movie.poster_path);
      // const backdrop = movieApi.getImageBackdropUrl(movie.backdrop_path);

      // console.log(movie);
      // console.log(poster);
      // console.log(backdrop);

      setMovies(data.results);
      setNum(2)
      console.log(data);
    };

    getMovies();

    // const getMovieVideos = async () => {
    //   const response = await movieApi.getMovieVideos();
    //   const data     = await response.json();

    //   console.log(data);
    // };

    // getMovieVideos();

    // fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiConfig.apiKey}&language=en-US&page=1`)
    //   .then(response => response.json())
    //   .then(data => {
    //     const { results } = data;

    //     console.log(data);
    //   });

    // fetch(`https://api.themoviedb.org/3/configuration?api_key=${apiConfig.apiKey}`)
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data);
    //   })

      console.log(movies);
      console.log(num);

  }, [num]);

  // useEffect(() => {}, [currentVideo])

  return (
    <div className={`mainWrapper ${currentPageClass === '' ? 'home' : currentPageClass}`} style={{ paddingTop: `${wrapperPaddingTop}px` }}>

      <Header/>
      <MainRoutes/>
      <Footer/>

    </div>
  );
}

export default App;
