import { create } from 'zustand';

const usePopUpStore = create((set) => ({
    popUpData: { isVisible: false, element: () => <></>, closeByClick: true },
    showPopUp: (closeByClick = true) => set((state) => ({
        popUpData: { ...state.popUpData, isVisible: true, closeByClick }
    })),
    hidePopUp: () => set((state) => ({
        popUpData: { isVisible: false, element: () => <></>, closeByClick: true }
    })),
    setPopValue: (element) => set((state) => ({
        popUpData: { ...state.popUpData, element }
    }))
}));

export default usePopUpStore;
