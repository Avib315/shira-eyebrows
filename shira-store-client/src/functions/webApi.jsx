import axios from "axios";
import { useEffect, useState } from "react";

const useAxiosReq = ({ defaultValue: defaultValue, method, url, body, dependency = [] }) => {
    const [data, setData] = useState(defaultValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const fetchData = async () => {
        setLoading(true);
        try {
            const result = await axiosReq({ method, url, body })
            setData(result);

        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => { fetchData() }, dependency)
    return { data: [data, setData], loading: [loading, setLoading], error }
}
const axiosReq = async ({ method = "POST", body, url }) => {
    try {

        const { data: result } = await axios({
            baseURL: "https://morti-server.onrender.com",
            withCredentials: true,
            method,
            data: body,
            url
        })
        return result
    }
    catch (error) {
        console.error("my Axios Error: \n", error)
        throw error.message;
    }

}


export { useAxiosReq, axiosReq }