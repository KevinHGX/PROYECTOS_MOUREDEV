import { useState, useEffect, useRef } from "react";
import isEqual from 'lodash.isequal';
import PropTypes from 'prop-types';

export function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(url);

  useEffect(() => {
    fetch(url)
         .then((response) => response.json())
         .then((json) => setData(json))
         .catch((error) => setError(error))
         .finally(() => setLoading(false));
  }, [url]);

   return { data, loading, error };
}

export function fetchContainerComponent(props) {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const previousProps = useRef(props);

    useEffect(() => {
        const fetchData = async () => {
            let newObject = {};
            try {
                for (let key in props) {
                    console.log(props[key]);
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
                setData(newObject);
                setLoading(false);
            } catch (error) {
                setError(error.toString());
                setLoading(false);
            }
        };

        if (!isEqual(props, previousProps.current)) {
            fetchData();
            previousProps.current = props;
        }
    }, [props]);

    return { data, loading, error };
}

