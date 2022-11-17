import { useState, useEffect, createContext } from "react";

const initialState = {
    genres: [],
    list: [],
    isLoading: true,
    selectedGenre: [],
    selectGenre: () => {},
    updateList: () => {},
    updateGenres: () => {},
};

// Context
export const ListingContext = createContext(initialState);

// Context Provider
const ListingContextProvider = props => {
    const [list, setList]   = useState([]);
    const [genres, setGenres] = useState([]);
    const [isLoading, setIsloading] = useState(true);
    const [selectedGenres, setSelectedGenres] = useState([]);

    const handleToggleLoading = isLoading => {
        setIsloading(isLoading);
    };

    const handleListUpdate = list => {

        setList(list);

    };

    const handleSelectGenre = id => {
        
        const isSelected    = selectedGenres.includes(id);
        let currentGenres = [...selectedGenres];

        if(isSelected) {

            currentGenres = currentGenres.filter(currentId => currentId != id);

            setSelectedGenres(currentGenres);
            
            return;
        }

        currentGenres.push(id);

        setSelectedGenres(currentGenres);
        
    };

    const handleGenresUpdate = genres => {

        setGenres(genres);

    };

    const values = {
        genres,
        list,
        isLoading,
        selectedGenres,
        selectGenre: handleSelectGenre,
        updateList: handleListUpdate,
        updateGenres: handleGenresUpdate,
        toggleLoading: handleToggleLoading
    }; 

    return (
        <ListingContext.Provider value={values}>
            {props.children}
        </ListingContext.Provider>
    );
};

export default ListingContextProvider;