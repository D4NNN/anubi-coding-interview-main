import { useEffect, useState } from "react";
import {baseUrl} from '../config.js'

export const useFetch: any = (endpoint: string) => {

    const [data, setData] = useState();

    const getData = async () => {
        const res = await fetch(`${baseUrl}${endpoint}`);
        const json = await res.json();
        setData(json);
    }

    useEffect(() => {
        getData();
    }, []);

    return {data};
}

export default useFetch