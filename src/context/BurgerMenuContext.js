import { useState, createContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
const initialState = {
    isActive: false,
};

// Context 
export const BurgerMenuContext = createContext(initialState);

// Context Provider
const BurgerMenuContextProvider = props => {
    const [isActive, setIsActive] = useState(false);
    const location = useLocation();
    const pathName = location.pathname;

    const burgerMenuOpen = () => {

        document.body.style.overflow = 'hidden';

        setIsActive(true);

    };

    const burgerMenuClose = () => {

        document.body.style.overflow = 'initial';

        setIsActive(false);
        
    };

    useEffect(() => {

        if(isActive) {

            // close burger menu when when path changes
            burgerMenuClose();
        }

    }, [pathName]);

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