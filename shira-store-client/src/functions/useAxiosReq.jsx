import axios from "axios";
import { useEffect, useState } from "react";
const baseURL = import.meta.env.VITE_API;

const useAxiosReq = ({ defaultValue = null, method, url, body, dependency = [] }) => {
    const [data, setData] = useState(defaultValue);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const fetchData = async () => {
        setLoading(true);
        try {
            const  data  = await axiosReq({ method, url, body })
            console.log("useAxiosReq:" ,data)
            setData(data);

        } catch (error) {
            setError(error)
        }
        finally {
            setLoading(false)
        }
    }
    useEffect(() => { fetchData() }, dependency)
    return { data, setData, loading, setLoading, error }
}
const axiosReq = async ({ method = "POST", body, baseURLArg, url, withCredentials = false }) => {
    try {
        console.warn("AXIOS Request:", baseURL, url);
        const { data: result } = await axios({
            baseURL: baseURLArg ? baseURLArg : baseURL,
            withCredentials,
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