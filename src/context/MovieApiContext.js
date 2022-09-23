import { useState, createContext, useEffect } from 'react';
import TMDBApi from '../api/tmdb-api';
const movieApi = new TMDBApi;

const initialState = {
    movies: [],
    setMovies: () => {}
};

// Context
export const MovieApiContext = createContext(initialState);

// Context Provider
const MovieApiContextProvider = props => {
    const [movies, setMovies] = useState([]);

    const getMovies = async () => {
        const response = await movieApi.getMovies();
        const data     = await response.json();

        setMovies(data.results);
        console.log('conetxt');
    };

    useEffect(() => {
       
        getMovies();

    }, []);

    const values = {
        movies: movies,
        setMovies: () => {}
    };

    return (
        <MovieApiContext.Provider value={values}>
            {props.children}
        </MovieApiContext.Provider>
    );

};

export default MovieApiContextProvider;