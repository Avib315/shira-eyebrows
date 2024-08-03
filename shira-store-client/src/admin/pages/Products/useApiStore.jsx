import { create } from 'zustand';
import { useAxiosReq } from "../../../functions/webApi";
import { axiosReq } from '../../store/useApiReq';

const url = "/item";

const useApiStore = create((set) => ({
    get: async () => {
        const response = await axiosReq({ method: "GET", url: url + "/many", defaultValue: [] });
        console.log(response)
        set({ data: response });
        return response;
    },
    post: async (body) => {
        console.log("__POST__");
        const response = await axiosReq({ method: "POST", url, body: body });
        console.log(response)
        set((state) => ({ data: [...state.data, response] }));
        return response;
    },
    put: async (body, id) => {
        const response = await axiosReq({ method: "PUT", url, body: { item: body, id } });
        set((state) => ({
            data: state.data.map(item => item.id === id ? response : item)
        }));
        return response;
    },
    del: async (id) => {
        const response = await axiosReq({ method: "DELETE", url, body: { id } });
        set((state) => ({
            data: state.data.filter(item => item.id !== id)
        }));
        return response;
    },
    data: []
}));

export default useApiStore;
