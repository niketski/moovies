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
    currentPage: 1,
    resultPerpage: 20,
    pageNumberLimit: 5,
    activePages: [],
    pages: [],
    maxPageNumberLimit: 5,
    minPageNumberLimit: 0,
    totalPages: null,
    pageCount: null,
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
                    currentPage: 1,
                    maxPageNumberLimit: currentState.pageNumberLimit,
                    minPageNumberLimit: 0,
                    activeGenres: currentGenres,
                }
            }
            
            currentGenres.push(id);
            
            return {
                ...currentState,
                currentPage: 1,
                query: '',
                maxPageNumberLimit: currentState.pageNumberLimit,
                minPageNumberLimit: 0,
                activeGenres: currentGenres
            }

        case 'UPDATE_SEARCH':

            return {
                ...currentState,
                activeGenres: [],
                currentPage: 1,
                query: action.keyword
            }

        case 'UPDATE_CURRENT_PAGE':
            return {
                ...currentState,
                currentPage: action.page
            }

        case 'UPDATE_TOTAL_PAGES':

            return {
                ...currentState,
                totalPages: action.totalPages
            }


        case 'SET_PAGES':
            
            const totalPages         = currentState.totalPages;
            const itemPerPage        = currentState.resultPerpage; 
            const maxPageNumberLimit = currentState.maxPageNumberLimit;
            const pageLimit          = currentState.pageNumberLimit;
            let pages                = [];

            if(totalPages < itemPerPage) {

                for(let i = 0; i <= totalPages; i++) {
                    pages.push(i);
                }

            } else {

                let maxPageNumberLimitArray = [...Array(maxPageNumberLimit + 1).keys()].slice(1);
                let indexOfLastPage  = maxPageNumberLimitArray.length;
                let indexOfFirstPage = maxPageNumberLimitArray.length - pageLimit;
    

                maxPageNumberLimitArray = maxPageNumberLimitArray.slice(indexOfFirstPage, indexOfLastPage);
                pages = maxPageNumberLimitArray;

            }

            return {
                ...currentState,
                pages: pages
            }


        case 'UPDATE_MAX_PAGE_NUMBER_LIMIT':
            

            return {
                ...currentState,
                maxPageNumberLimit: action.maxPageNumberLimit
            }

        case 'UPDATE_MIN_PAGE_NUMBER_LIMIT':

            return {
                ...currentState,
                minPageNumberLimit: action.minPageNumberLimit
            }

        case 'SET_PAGE_COUNT':

            const pageNumberLimit = currentState.pageNumberLimit;

            return {
                ...currentState,
                pageCount: action.pageCount
            }
            

    }
};

const useListing = (listingType = 'movie') => {
    const [state, dispatch] = useReducer(listingReducer, initialState);

    const fetchData = async (genres, keyword, currentPage) => {
    
        dispatch({ type: 'FETCH_DATA' });

        let response; 

        // fetch tv series data
        if(listingType === 'tv') {

            response = await tmdbApiInstance.getTvSeries();

            if(keyword.length) { // fetch by search keyword

                response = await tmdbApiInstance.search(state.query, listingType, currentPage);
    
            } else if (genres.length) { // fetch by genre
    
                response = await tmdbApiInstance.getByGenre(listingType, genres.join(','), currentPage);
    
            } else { // default fetch
    
                response = await tmdbApiInstance.getTvSeries('popular', currentPage);
    
            }

            if(!response.ok) {
                const message = `An error has occured: ${response.status}`;
                throw new Error(message);
            }

            const data            = await response.json();
            const pageNumberLimit = state.pageNumberLimit;
            let pageCount         = pageNumberLimit;
    
            if(data.total_pages < pageCount) {
    
                pageCount = data.totalPages;
    
            }

            console.log(data);
            dispatch({ type: 'DATA_RESPONSE', data: data.results});
            dispatch({ type: 'UPDATE_TOTAL_PAGES', totalPages: data.total_pages});
            dispatch({ type: 'SET_PAGES' });
            dispatch({ type: 'SET_PAGE_COUNT', pageCount: pageCount });

            return;
        }


         // fetch movies data

        if(keyword.length) { // fetch by search keyword

            response = await tmdbApiInstance.search(state.query, listingType, currentPage);

        } else if (genres.length) { // fetch by genre

            response = await tmdbApiInstance.getByGenre(listingType, genres.join(','), currentPage);

        } else { // default fetch

            response = await tmdbApiInstance.getMovies('popular', currentPage);

        }

        if(!response.ok) {
            const message = `An error has occured: ${response.status}`;
            throw new Error(message);
        }

        const data            = await response.json();
        const pageNumberLimit = state.pageNumberLimit;
        let pageCount         = pageNumberLimit;

        if(data.total_pages < pageCount) {

            pageCount = data.total_pages;

        }

        console.log(data);

        dispatch({ type: 'DATA_RESPONSE', data: data.results});
        dispatch({ type: 'UPDATE_TOTAL_PAGES', totalPages: data.total_pages});
        dispatch({ type: 'SET_PAGES' });
        dispatch({ type: 'SET_PAGE_COUNT', pageCount: pageCount });
        
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

    const updateCurrentPage = pageNumber => {
        dispatch({ type: 'UPDATE_CURRENT_PAGE', page: pageNumber });
    };

    const handlePrevPage = currentPage => {

        if(currentPage - 1 <= 0) {
            return false;
        }

        dispatch({ type: 'UPDATE_CURRENT_PAGE', page: currentPage - 1 });

        if((currentPage - 1) % state.pageNumberLimit == 0) {

            dispatch({ type: 'UPDATE_MAX_PAGE_NUMBER_LIMIT', maxPageNumberLimit: state.maxPageNumberLimit - state.pageNumberLimit });
            dispatch({ type: 'UPDATE_MIN_PAGE_NUMBER_LIMIT', minPageNumberLimit: state.minPageNumberLimit - state.pageNumberLimit });
        }
    };

    const handleNextPage = currentPage => {

        if(currentPage + 1 > state.totalPages) {
           
            return false;
            
        }

        dispatch({ type: 'UPDATE_CURRENT_PAGE', page: currentPage + 1 });

        if((currentPage + 1) > state.maxPageNumberLimit) {

            dispatch({ type: 'UPDATE_MAX_PAGE_NUMBER_LIMIT', maxPageNumberLimit: state.maxPageNumberLimit + state.pageNumberLimit });
            dispatch({ type: 'UPDATE_MIN_PAGE_NUMBER_LIMIT', minPageNumberLimit: state.minPageNumberLimit + state.pageNumberLimit });
        }
    };
    
    
    let pageNumbers = null;

    if(state.pages) {

        pageNumbers = state.pages.filter(number => {

            if(number < state.maxPageNumberLimit + 1 && number > state.minPageNumberLimit) {

                return number;

            } 

        });
    }

    

    useEffect(() => {
        let timer;

        if(state.query.length) {

            timer = setTimeout(() => {

                fetchData(state.activeGenres, state.query, state.currentPage)
                    .catch(error => {
                        dispatch({ type: 'DATA_ERROR', errorMessage: 'An error has occured fetching data.' });
                    });

            }, 500);

        } else {

            fetchData(state.activeGenres, state.query, state.currentPage)
                .catch(error => {
                    dispatch({ type: 'DATA_ERROR', errorMessage: 'An error has occured fetching data.' });
                });
        }


        return () => {

            clearTimeout(timer);
            
        };

    }, [state.activeGenres, state.query, state.currentPage]);

    useEffect(() => {

        fetchGenres()
            .catch(error => {
                dispatch({ type: 'GENRE_ERROR', errorMessage: 'An error has occured fetching genres.' });
            });
            
    }, []);

    return {
        data: state.data,
        isLoading: state.isLoading,
        errorMessage: state.errorMessage,
        genres: state.genres,
        isLoadingGenre: state.isLoadingGenre,
        genreErrorMessage: state.genreErrorMessage,
        errorType: state.errorType,
        activeGenres: state.activeGenres,
        currentPage: state.currentPage,
        pageNumbers: pageNumbers,
        totalPages: state.totalPages,
        pageCount: state.pageCount,
        updateSelectedGenre: updateActiveGenres,
        updateSearch: updateSearchKeyword,
        updateCurrentPage: updateCurrentPage,
        prevPage: handlePrevPage,
        nextPage: handleNextPage,
    };

};

export default useListing;