import { useState, useEffect } from 'react';
import styles from './Movies.module.css';
import InnerPage from "../../components/layout/inner-page/InnerPage";
import QuickSearch from "../../components/quick-search/QuickSearch";
import FilterTabs from '../../components/ui/filter-tabs/FilterTabs';
import CardList from '../../components/card-list/CardList';
import Pagination from '../../components/pagination/Pagination';
import Spinner from '../../components/ui/spinner/Spinner';
import moviePlaceholder from '../../assets/images/movie-placeholder.jpg'

import TMDBApi from '../../api/tmdb-api';
import apiConfig from '../../api/tmdb-api.config';
const movieApi = new TMDBApi;

const Movies = () => {
    const [movies, setMovies]               = useState(null);
    const [genres, setGenres]               = useState(null);
    const [isLoading, setIsLoading]         = useState(true);
    const [selectedGenre, setSelectedGenre] = useState([]);
    let cardsList = null;

    const fetchMovies = async () => {
        const response = await movieApi.getMovies();
        const data     = await response.json();
        const moviesList = data.results.map(data => {
            const poster  = data.poster_path ? movieApi.getImagePosterUrl(data.poster_path) : moviePlaceholder;
            const year_released = data.release_date.split('-')[0];
            const genres = data.genre_ids.map(genre => {
                return apiConfig.genres[genre]
            }); 

            return {
                featuredImage: poster,
                title: data.title,
                details: `${year_released} . ${genres.join(' | ')}`,
                link: `/details/movie/${data.id}`
            };
        });

        console.log(data);

        setMovies(moviesList);
        setIsLoading(false);
    };

    const fetchGenres = async () => {
        const response = await movieApi.getGenre('movie');
        const data     = await response.json();

        setGenres(data.genres);
    };

    const handleFilterClick = id => {
        
        const isSelected    = selectedGenre.includes(id);
        let currentGenres = [...selectedGenre];

        if(isSelected) {

            currentGenres = currentGenres.filter(currentId => currentId != id);

            setSelectedGenre(currentGenres);
            
            return;
        }

        currentGenres.push(id);

        setSelectedGenre(currentGenres);
        
    };

    const fetchMoviesByGenre = async () => {
        const response = await movieApi.getByGenre('movie', selectedGenre.join(','));
        const data     = await response.json();
        const moviesList = data.results.map(data => {
            const poster  = data.poster_path ? movieApi.getImagePosterUrl(data.poster_path) : moviePlaceholder;
            const year_released = data.release_date ? data.release_date.split('-')[0] : '';
            const genres = data.genre_ids.map(genre => {
                return apiConfig.genres[genre]
            }); 

            // console.log(genres);
            console.log(data);
            console.log(data.release_date);
            return {
                featuredImage: poster,
                title: data.title,
                details: `${year_released } . ${genres.join(' | ')}`,
                link: `/details/movie/${data.id}`
            };
        });

        setMovies(moviesList);
        setIsLoading(false);
    };

    useEffect(() => {

        setIsLoading(true);

        fetchMovies();
        fetchGenres();

    }, []);

    useEffect(() => {

        setIsLoading(true);
        fetchMoviesByGenre();

    }, [selectedGenre]);

    

    return (
        <InnerPage title="Movies">
            <QuickSearch className={styles.moviesQuickSearch}/>

            {genres && <FilterTabs 
                            clickHandler={handleFilterClick} 
                            className={styles.moviesTabs} 
                            tabs={genres} 
                            activeTabs={selectedGenre}
                            align="center"/>}

            {isLoading && <Spinner/>}

            {(movies && !isLoading) && <CardList className={styles.moviesCardList} cards={movies}/>}
            
            <Pagination className={styles.moviesPagination}/>
        </InnerPage>
    );
}

export default Movies;