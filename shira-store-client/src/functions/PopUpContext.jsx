import React, { createContext, useState, useContext } from 'react';

// Create the context
const PopUpContext = createContext();

// Create a provider component
export const PopUpProvider = ({ children }) => {
    const [popUpData, setPopUpData] = useState({ isVisible: false, element: () => <></> });

    const showPopUp = (closeByClick = true) => setPopUpData((prevData) => ({ ...prevData, isVisible: true , closeByClick:closeByClick }));
    const hidePopUp = () => setPopUpData({ isVisible: false, element: () => <></> });
    const setPopValue = (element) => setPopUpData((prevData) => ({ ...prevData, element }));

    return (
        <PopUpContext.Provider value={{ popUpData, showPopUp, hidePopUp, setPopValue }}>
            {children}
        </PopUpContext.Provider>
    );
};

// Custom hook to use the PopUpContext
export const usePopUp = () => {
    return useContext(PopUpContext);
};
