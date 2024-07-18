import React, { createContext, useState, useContext } from 'react';
import { usePopUp } from './PopUpContext';
import Cart from '../components/Cart/cart';
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
    const [cartData, setCartData] = useState({ items: [] });
    const { setPopValue, showPopUp } = usePopUp();
    const openCart = () => {
        showPopUp();
        setPopValue(Cart);
    };
    const closeCart = () => setCartData((prevData) => ({ ...prevData, isOpen: false }));

    return (
        <CartContext.Provider value={{ cartData, setCartData , openCart }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    return useContext(CartContext);
};
