import { useEffect, useReducer } from "react";
import apiConfig from "../api/tmdb-api.config";
import TMDBApi from "../api/tmdb-api";

// initialize
const tmdbApiInstance = new TMDBApi();

const initialState = {
    data: null,
    isLoading: false,
    errorMessage: null,
    genres: null,
    isLoadingGenre: false,
    genreErrorMessage: null,
    activeGenres: [],
    errorType: null,
    query: '',
};

const listingReducer = (currentState, action) => {

    switch(action.type) {

        case 'FETCH_DATA':

            return {
                ...currentState,
                isLoading: true,
                errorMessage: null,
                data: null,
            }

        case 'DATA_RESPONSE':

            return {
                ...currentState,
                isLoading: false,
                data: action.data,
                errorMessage: null,
                errorType: null
            }

        case 'FETCH_GENRES':

            return {
                ...currentState,
                isLoadingGenre: true,
                genres: null,
                activegenres: null,
                genreErrorMessage: null,
            }

        case 'GENRE_RESPONSE':

            return {
                ...currentState,
                isLoadingGenre: false,
                genres: action.genres,
                errorType: null
            }

        case 'DATA_ERROR':

            return {
                ...currentState,
                isLoading: false,
                errorType: 'data',
                errorMessage: action.errorMessage,

            }

        case 'GENRE_ERROR':

            return {
                ...currentState,
                isLoadingGenre: false,
                errorType: 'genre',
                genreErrorMessage: action.errorMessage
            }

        case 'UPDATE_ACTIVE_GENRE':

            const id = action.genreId;
            const isSelected = currentState.activeGenres.includes(id);
            let currentGenres = [...currentState.activeGenres];

            if(isSelected) {

                currentGenres = currentGenres.filter(currentId => currentId != id);

                return {
                    ...currentState,
                    activeGenres: currentGenres,
                }
            }
            
            currentGenres.push(id);
            
            return {
                ...currentState,
                activeGenres: currentGenres
            }

        case 'UPDATE_SEARCH':

            return {
                ...currentState,
                activeGenres: [],
                query: action.keyword
            }

    }
};

const useListing = (listingType = 'movie') => {
    const [state, dispatch] = useReducer(listingReducer, initialState);


    const fetchData = async (genres, keyword) => {
    
        dispatch({ type: 'FETCH_DATA' });

        let response; 

        // fetch tv series data
        if(listingType === 'tv') {

            response = await tmdbApiInstance.getTvSeries();

            if(keyword.length) { // fetch by search keyword

                response = await tmdbApiInstance.search(state.query, listingType);
    
            } else if (genres.length) { // fetch by genre
    
                response = await tmdbApiInstance.getByGenre(listingType, genres.join(','));
    
            } else { // default fetch
    
                response = await tmdbApiInstance.getTvSeries();
    
            }

            if(!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }

            const data     = await response.json();

            dispatch({ type: 'DATA_RESPONSE', data: data.results});

            return;
        }


         // fetch movies data

        if(keyword.length) { // fetch by search keyword

            response = await tmdbApiInstance.search(state.query, listingType);

        } else if (genres.length) { // fetch by genre

            response = await tmdbApiInstance.getByGenre(listingType, genres.join(','));

        } else { // default fetch

            response = await tmdbApiInstance.getMovies();

        }

        if(!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data     = await response.json();

        dispatch({ type: 'DATA_RESPONSE', data: data.results});
        
    };

    const fetchGenres = async () => {

        dispatch({ type: 'FETCH_GENRES' });

        const response = await tmdbApiInstance.getGenre(listingType);

        if(!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data     = await response.json();

        dispatch({ type: 'GENRE_RESPONSE', genres: data.genres }); 
    };

    const updateActiveGenres = id => {

        dispatch({ type: 'UPDATE_ACTIVE_GENRE', genreId: id })
    };

    const updateSearchKeyword = keyword => {

        dispatch({ type: 'UPDATE_SEARCH', keyword: keyword});
    };

    useEffect(() => {
        let timer;

        if(state.query.length) {

            timer = setTimeout(() => {

                fetchData(state.activeGenres, state.query)
                    .catch(error => {
                        dispatch({ type: 'DATA_ERROR', errorMessage: 'An error has occured fetching data.' });
                    });

            }, 500);

        } else {

            fetchData(state.activeGenres, state.query)
                .catch(error => {
                    dispatch({ type: 'DATA_ERROR', errorMessage: 'An error has occured fetching data.' });
                });
        }


        return () => {

            clearTimeout(timer);
            
        };

    }, [state.activeGenres, state.query]);

    useEffect(() => {

        fetchGenres()
            .catch(error => {
                dispatch({ type: 'GENRE_ERROR', errorMessage: 'An error has occured fetching genres.' });
            });
            
    }, [])



    return {
        data: state.data,
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        genres: state.genres,
        isLoadingGenre: state.isLoadingGenre,
        genreErrorMessage: state.genreErrorMessage,
        errorType: state.errorType,
        activeGenres: state.activeGenres,
        updateSelectedGenre: updateActiveGenres,
        updateSearch: updateSearchKeyword
    };

};

export default useListing;