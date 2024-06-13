import { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

function AsideList({ url, setNewURL, setNewFileMain, ckey }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [keyNav, setKeyNav] = useState(ckey);
  const { data, loading, error } = useFetch(url);

  // Almacenar el contenido de result
  let results = (data) ? data.results : [];
  console.log(results);

  useEffect(() => {
    let aux;
    if (results.length > 0) {
      const firstValue = results[0];
      aux = firstValue.url; 
      setNewFileMain(aux);
      setSelectedItem(0);
    } else {
      console.log("El array está vacío.");
    }

    setKeyNav(ckey);
  }, [url, data]);

  const handleShowMore = (current) => {
    if (data && data?.next !== null && current !== 'next') {
      setNewURL(data.next);
    }

    if (data && data?.previous !== null && current !== 'previous') {
      setNewURL(data.previous);
    }
  };

  const updateURLIndex = (url, index) => {
    setSelectedItem(index);
    console.log("click: ", index);
    setNewFileMain(url); // Esta función no necesita un return statement
  };

  return (
    <div id="container-left">
      <ul id="subnavegacion-list">
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {results.map((item, index) => (
          <li
            key={item?.name || item?.title}
            onClick={() => updateURLIndex(item.url, index)}
            id={`${selectedItem === index ? 'selected' : ''}`}
          >
            {item?.name || item?.title}
          </li>
        ))}
      </ul>
      {(keyNav !== 'films') && 
        <div id="buttons">      
          <button onClick={() => handleShowMore("next")}>PREV</button>
          <button onClick={() => handleShowMore("previous")}>NEXT</button>
        </div>
      }
    </div>
  );
}

export default AsideList;
