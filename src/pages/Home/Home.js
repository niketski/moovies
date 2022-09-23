import { useEffect, useState } from 'react';
import Hero from '../../components/hero/Hero';
import bannerPlaceholder from '../../assets/images/home-banner.jpg'
import FeaturedMovies from "../../components/featured-movies/FeaturedMovies";
import FeaturedTv from "../../components/featured-tv/FeaturedTv";
import TMDBApi from '../../api/tmdb-api';
import apiConfig from '../../api/tmdb-api.config';
const movieApi = new TMDBApi;


const Home = () => {
    const [heroMovie, setHeroMovie] = useState(null);
    const [error, setError]         = useState(false);

    const getMovies = async () => {
        const response = await movieApi.getMovies();
        const data     = await response.json();
        
        if(!response.ok) {

            setError(true);

            throw new Error('we have error');

        }

        const firstMovie = data.results[0];

        setHeroMovie(firstMovie);
    }

    useEffect(() => {

        getMovies();

        console.log(error);

    }, [error]);

    let heroProps = {
        height: 800,
        bannerImage: heroMovie ? movieApi.getImageBackdropUrl(heroMovie.backdrop_path) : bannerPlaceholder,
        bannerTitle: heroMovie ? heroMovie.title : '',
        bannerDescription: heroMovie ? heroMovie.overview : '',
        ctaLink: '/'
    };

    return (
        <div>
            <Hero {...heroProps}/>
            <FeaturedMovies/>
            <FeaturedTv/>
        </div>
    );
}

export default Home;