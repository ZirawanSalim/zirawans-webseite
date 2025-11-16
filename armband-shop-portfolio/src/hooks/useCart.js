import { useState } from 'react';

const useCart = () => {
    const [cartItems, setCartItems] = useState([]);

    const addToCart = (product) => {
        setCartItems((prevItems) => [...prevItems, product]);
    };

    const removeFromCart = (productId) => {
        setCartItems((prevItems) => prevItems.filter(item => item.id !== productId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartItems = () => {
        return cartItems;
    };

    const getCartCount = () => {
        return cartItems.length;
    };

    return {
        addToCart,
        removeFromCart,
        clearCart,
        getCartItems,
        getCartCount,
    };
};

export default useCart;