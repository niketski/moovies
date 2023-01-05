import { useState, createContext, useEffect } from 'react';

const initialState = {
    isActive: false,
};

// Context 
export const BurgerMenuContext = createContext(initialState);

// Context Provider
const BurgerMenuContextProvider = props => {
    const [isActive, setIsActive] = useState(false);

    const burgerMenuOpen = () => {

        document.body.style.overflow = 'hidden';

        setIsActive(true);

    };

    const burgerMenuClose = () => {

        document.body.style.overflow = 'initial';

        setIsActive(false);

    };

    useEffect(() => {

        
    }, []);

    const values = {
        burgerMenuOpen,
        burgerMenuClose,
        isActive
    };

    return (
        <BurgerMenuContext.Provider value={values}>
            {props.children}
        </BurgerMenuContext.Provider>
    );
};

export default BurgerMenuContextProvider;