import { create } from 'zustand';
import { axiosReq } from '../../store/useApiReq';
import usePopUpStore from '../../../functions/usePopUpStore';
import PopUp from '../../components/PopUp/popUp'; // Adjust the path if needed

const url = "/item";

const useApiStore = create((set) => ({
    data: [],
    loading: false,

    get: async function () {
        try {
            const response = await axiosReq({ method: "GET", url: `${url}/many`, defaultValue: [] });
            set({ data: response });
            return response;
        } catch (error) {
            console.error('Failed to fetch data', error);
        }
    },

    post: async function (body) {
        set({ loading: true, message: "" });
        try {
            const response = await axiosReq({ method: "POST", url, body: { data: { ...body } } });
            if (!response) {
                console.error('Failed to post data');
                return "שמירה לא בוצעה"
            }
            return "נשמר בהצלחה";
        } catch (error) {
            console.error('Failed to post data', error);
        } finally {
            set({ loading: false });
        }
    },

    put: async function (body) {
        set({ loading: true });
        try {
            const response = await axiosReq({ method: "PUT", url, body: { data: { ...body }, _id: body._id } });
            if (!response) {
                console.error('Failed to update data');
                return "עידכון לא בוצעה. משהו השבש";
            }
            set({ loading: false });
            return "עודכן בהצלחה";
        } catch (error) {
            console.error('Failed to update data', error);
        } finally {
            set({ loading: false });
        }
    },

    del: async function (id) {
        try {
            const response = await axiosReq({ method: "DELETE", url, body: { id } });
            if (!response) {
                console.error('Failed to delete data');
                return "מחיקה לא בוצעה. משהו השבש";
            }
            return "נמחק בהצלחה";
        } catch (error) {
            set({ message: "מחיקה לא בוצעה. משהו השבש" });
            console.error('Failed to delete data', error);
        }

    }
}));

export default useApiStore;
