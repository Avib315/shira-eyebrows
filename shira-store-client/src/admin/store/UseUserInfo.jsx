import axios from 'axios';
import { create } from 'zustand'

export const UseUserInfo = create((set, get) => ({
    user: false,
    loading: false,
    setUser: (user) => {
        console.log({ user });
        // TODO - login user with server
        set({ user })
    },
    refreshToken: async () => {
        const token = localStorage.token;
        const state = get()
        if (!token || state.user) return;
        set({ loading: true })
        const user = await axios.get("")
        set({ loading: false, user })
    },
    setLoading: () => {
        const token = localStorage.token;
        if (!token || user) return;
    },
    logout: function () {
        localStorage.removeItem('token')
        set((state) => ({ user: null }))
    }
}))

