import { useState, useEffect } from "react";
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
         .then((response) => response.json())
         .then((json) => setData(json))
         .catch((error) => setError(error))
         .finally(() => setLoading(false));
  }, [url]);

   return { data, loading, error };
}

export function fetchContainerComponent(props, update ) {
    const [dataURL, setDataURL] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    let newObject = {};

    const fetchData = async () => {
        try {
            for (let key in props) {
                if (Array.isArray(props[key])) {
                    const responses = await Promise.all(props[key].map(url => fetch(url)));
                    const jsonValues = await Promise.all(responses.map(res => res.json()));
                    newObject[key] = jsonValues;
                } else {
                    const response = await fetch(props[key]);
                    const json = await response.json();
                    newObject[key] = json;
                }
            }
            setDataURL(newObject);
            setLoading(false);
        } catch (error) {
            setError(error.toString());
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();        
    }, [update]);       

    return { dataURL, loading, error };
}

