import { useState, createContext, useEffect } from "react";
import { useLocation } from "react-router-dom";

const initialState = {
    wrapperPaddingTop: 0,
    currentPageClass: '',
    setWrapperPaddingTop: () => {}
};

// Context
export const DOMLoadedContext = createContext(initialState);

// Context Provider
const DOMLoadedContextProvider = props => {
    const location                    = useLocation();
    const currentPath                 = location.pathname;
    const paths                       = location.pathname.split('/');
    let currentPathLastIndex          = paths[paths.length - 1];
    const [pageClass, setPageClass]   = useState('');
    const [paddingTop, setPaddingTop] = useState(0);

    const setWrapperPaddingTop = paddingTop => {

        setPaddingTop(paddingTop);

    };

    const setPageClassHandler = pageClass => {

        setPageClass(pageClass);

    };

    useEffect(() => {
    
        setPageClass(currentPathLastIndex);

    }, [currentPath]);

   

    const values = {
        wrapperPaddingTop: paddingTop,
        setWrapperPaddingTop: setWrapperPaddingTop,
        currentPageClass: pageClass,
    };

    return (

        <DOMLoadedContext.Provider value={values}>
            {props.children}
        </DOMLoadedContext.Provider>

    );

};

export default DOMLoadedContextProvider;