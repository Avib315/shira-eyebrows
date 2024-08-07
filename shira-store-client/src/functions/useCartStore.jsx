import { create } from 'zustand';
import usePopUpStore from './usePopUpStore';
import Cart from '../components/Cart/cart';

const useCartStore = create((set, get) => ({
    cartData: getCartFromLocalStorage(),
    sumItemsInCart: () => get().cartData.reduce((sum, item) => sum + item.inCart, 0),
    calcPriceInCart: () => get().cartData.reduce((sum, item) => sum + item.price * item.inCart, 0).toFixed(2),
    setCartData: (newData) => set({ cartData: newData }),

    openCart: () => {
        const { showPopUp, setPopValue } = usePopUpStore.getState();
        setPopValue(() => <Cart />);
        showPopUp(true);
        set({ isCartOpen: true });
    },

    addToCart: (item) => {
        const cart = getCartFromLocalStorage();
        const existingItem = cart.find(e => e._id === item._id);
        if (existingItem) {
            existingItem.inCart += 1;
        } else {
            item.inCart = 1;
            cart.push(item);
        }
        setCartInLocalStorage(cart);
        set({ cartData: cart });
    },

    removeFromCart: (item) => {
        let cart = getCartFromLocalStorage();
        const existingItem = cart.find(e => e._id === item._id);
        if (existingItem) {
            if (existingItem.inCart === 1) {
                cart = cart.filter(e => e._id !== item._id);
            } else {
                existingItem.inCart -= 1;
            }
            setCartInLocalStorage(cart);
            set({ cartData: cart });
        }
    },

    closeCart: () => {
        const { hidePopUp } = usePopUpStore.getState();
        hidePopUp();
        set({ isCartOpen: false });
    }
}));

function getCartFromLocalStorage() {
    const cart = localStorage.getItem('ShiraEyebrowsCart');
    return cart ? JSON.parse(cart) : [];
}

function setCartInLocalStorage(cart) {
    localStorage.setItem('ShiraEyebrowsCart', JSON.stringify(cart));
}

export default useCartStore;
