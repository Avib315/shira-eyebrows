import {create} from 'zustand';
import usePopUpStore from './usePopUpStore';
import Cart from '../components/Cart/cart';

const useCartStore = create((set) => ({
    cartData: { items: [] },
    setCartData: (newData) => set({ cartData: newData }),
    openCart: () => {
        const { showPopUp, setPopValue } = usePopUpStore.getState();
        setPopValue(Cart);
        showPopUp();
    },
    closeCart: () => set((state) => ({
        cartData: { ...state.cartData, isOpen: false }
    }))
}));

export default useCartStore;
