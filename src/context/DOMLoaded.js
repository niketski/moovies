import { useState, createContext } from "react";

const initialState = {
    wrapperPaddingTop: 0,
    setWrapperPaddingTop: () => {}
};

// Context
export const DOMLoadedContext = createContext(initialState);

// Context Provider
const DOMLoadedContextProvider = props => {
    const [paddingTop, setPaddingTop] = useState(0);

    const setWrapperPaddingTop = paddingTop => {

        setPaddingTop(paddingTop);

    };

    const values = {
        wrapperPaddingTop: paddingTop,
        setWrapperPaddingTop: setWrapperPaddingTop
    };

    return (

        <DOMLoadedContext.Provider value={values}>
            {props.children}
        </DOMLoadedContext.Provider>

    );

};

export default DOMLoadedContextProvider;