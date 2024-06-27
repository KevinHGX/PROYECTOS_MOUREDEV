import axios from 'axios';
import { useEffect, useState } from 'react';

const mongoApi = axios.create({
  baseURL: 'http://localhost:4000/api'
});

export function useAxios() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = () => {
            mongoApi.get('/user/')
            .then(response => {
                    console.log("response: ", response.data);
                    setData(response.data);
              }).catch(error => {
                setError(error);
              }).finally(() => {
                setLoading(false);
              });
          };

        fetchData();
    }, []);

    return { data, loading, error };
}
