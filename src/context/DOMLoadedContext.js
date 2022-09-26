import { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const initialState = {
    wrapperPaddingTop: 0,
    currentUrl: '',
    setWrapperPaddingTop: () => {}
};

// Context
export const DOMLoadedContext = createContext(initialState);

// Context Provider
const DOMLoadedContextProvider = props => {
    const location                    = useLocation();
    const currentPath                 = location.pathname;
    const [currentUrl, setCurrentUrl]   = useState('');
    const [paddingTop, setPaddingTop] = useState(0);

    const setWrapperPaddingTop = paddingTop => {

        setPaddingTop(paddingTop);

    };

    useEffect(() => {
    
        setCurrentUrl(currentPath);

    }, [currentPath]);

   

    const values = {
        wrapperPaddingTop: paddingTop,
        setWrapperPaddingTop: setWrapperPaddingTop,
        currentUrl: currentUrl,
    };

    return (

        <DOMLoadedContext.Provider value={values}>
            {props.children}
        </DOMLoadedContext.Provider>

    );

};

export default DOMLoadedContextProvider;