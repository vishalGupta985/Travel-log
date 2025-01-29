// client/src/useFetch.js

import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (url) => {
    // console.log("url", url);
    
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            // console.log('im in fetchdata');
            
            setLoading(true);
            try {

                const res = await axios.get(url)
                // const res = await axios.get(`http://localhost:3000${url}`);

                // console.log("response from useFetch", res);
                
                setData(res.data);
            } catch (err) {
                setError(err);
            }
            setLoading(false);
        };
        fetchData();
    }, [url]);

    const reFetch = async () => {
        setLoading(true);
        try {
            const res = await axios.get(url)

            setData(res.data);
        } catch (err) {
            setError(err);
        }
        setLoading(false);
    };
    // console.log("data from use fetch", data);
    return { data, loading, error, reFetch };
};

export default useFetch;