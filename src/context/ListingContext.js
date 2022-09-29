import { useState, useEffect, createContext } from "react";

const initialState = {
    genres: [],
    list: [],
    isLoading: true,
    selectedGenre: [],
    selectGenre: () => {},
};

// Context
export const ListingContext = createContext(initialState);

// Context Provider
export default ListingContextProvider = props => {
    const [list, setList]   = useState([]);
    const [genres, setGenre] = useState([]);
    const [selectedGenres, setSelectedGenres] = useState([]);

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

    const handleUpdateType = type => {

        setType(type);

    };

    const values = {
        list,
        genres,
        isLoading,
        selectedGenres,
        selectGenre:  handleSelectGenre,
    }; 

    return (
        <ListingContext.Provider value={values}>
            {props.children}
        </ListingContext.Provider>
    );
};