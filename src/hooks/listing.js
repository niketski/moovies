import { useReducer, useEffect } from "react";

import apiConfig from "../api/tmdb-api.config";
import TMDBApi from "../api/tmdb-api";

const {baseUrl, apiKey, imageBaseUrl, urlSuffix} = apiConfig;
const tmdbApi = new TMDBApi();

const initialState = {
    data: [],
    dataIsLoading: false,
    errorMessage: null,
    genres: [],
    genreIsLoading: false,
    activeGenres: [],
    fetchData: () => {},
    updateActiveGenres: () => {},
};

const listingReducer = (currentState, action) => {

    switch(action.type) {

        case 'FETCH_DATA':

            return {
                ...currentState,
                data: null,
                dataIsLoading: true,
            };

        case 'DATA_RESPONSE':

            return {
                ...currentState,
                dataIsLoading: false,
                data: action.data,
                errorMessage: null
            }

        case 'ERROR':

            let returnData = {
                ...currentState,
                dataIsLoading: false,
                data: null,
                errorMessage: action.errorMessage
            };

            if(action.errorType === 'genre') {

                returnData = {
                    ...currentState,
                    genreIsLoading: false,
                    genres: null,
                    errorMessage: action.errorMessage
                };
            }

            return returnData;

        case 'DATA_UPDATE':

            return {
                ...currentState,
                data: action.data
            }

        case 'FETCH_GENRE':

            return {
                ...currentState,
                genres: null,
                activeGenres: null,
                genreIsLoading: true,
            }

        case 'GENRE_RESPONSE':

            return {
                ...currentState,
                genres: action.genres,
                genreIsLoading: false,
                errorMessage: null,
            }

        case 'GENRE_ERROR':

            return {
                ...currentState,
                genreIsLoading: false,
                genre: null,
                errorMessage: action.errorMessage
            }
    }

};

const useListing = (type = 'tv') => {
    const [listingState, dispatch] = useReducer(listingReducer, initialState);
    const listingType = type;
    let currentUrl = `${baseUrl}/${listingType}/popular/?${urlSuffix}`;

    const fetchData = async url => {

        dispatch({
            type: 'FETCH_DATA'
        });

        const response = await fetch(url + 'qeqweqw');
    
        
        if(!response.ok) {

            dispatch({
                type: 'ERROR',
                errorType: 'data',
                errorMessage: 'Data: Something went wrong!'
            });

            console.log('error');

            return;
        }

        const data = await response.json();

        dispatch({
            type: 'DATA_RESPONSE',
            data: data.results
        });
    
    };

    const fetchGenres = async (type = 'movie') => {
        
        dispatch({
            type: 'FETCH_GENRE'
        });

        const response = await fetch(`${baseUrl}/genre/${type}/list?${urlSuffix}`);
        
        if(!response.ok) {

            dispatch({
                type: 'ERROR',
                errorType: 'genre',
                errorMessage: 'Genre: Something went wrong!'
            });

            console.log('error');

            return;
        }

        const data = await response.json();

        dispatch({
            type: 'GENRE_RESPONSE',
            genres: data.genres
        });
        
    };
    

    useEffect(() => {

        fetchData(currentUrl);
        fetchGenres(type);

    }, []);

    return {
        data: listingState.data,
        dataIsLoading: listingState.dataIsLoading,
        dataError: listingState.errorMessage
    }
};

export default useListing;