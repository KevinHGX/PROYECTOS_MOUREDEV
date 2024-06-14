import { useState, useEffect, useCallback } from 'react';
import { useFetch } from './useFetch';
import { debounce } from 'lodash';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretRight, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

function AsideList({ url, setNewURL, setNewFileMain, ckey }) {
  const [selectedItem, setSelectedItem] = useState(0);
  const [keyNav, setKeyNav] = useState(ckey);
  const [searchTerm, setSearchTerm] = useState('');
  const { data, loading, error, updateUrl } = useFetch(url);

  // Function to fetch data based on search term with debounce
  const debounceFetch = useCallback(debounce((term) => {
    const searchUrl = term ? `${url}?search=${term}` : url;
    updateUrl(searchUrl);
  }, 500), [url, updateUrl]);

  useEffect(() => {
    debounceFetch(searchTerm);
  }, [searchTerm, debounceFetch]);

  let results = data ? data.results : [];

  useEffect(() => {
    if (results.length > 0) {
      const firstValue = results[0];
      setNewFileMain(firstValue.url);
      setSelectedItem(0);
    } else {
      console.log("El array está vacío.");
    }
    setKeyNav(ckey);
  }, [results, setNewFileMain, ckey]);

  const handleShowMore = (current) => {
    if (data && data.next !== null && current !== 'next') {
      setNewURL(data.next);
    }
    if (data && data.previous !== null && current !== 'previous') {
      setNewURL(data.previous);
    }
  };

  const updateURLIndex = (url, index) => {
    setSelectedItem(index);
    setNewFileMain(url);
  };

  return (
    <div id="container-left">
      {(keyNav !== 'films') && <div id="search-list">
        <FontAwesomeIcon id="iconSearch" icon={faMagnifyingGlass} />
        <input id="inputSearch"
          type="text"
          placeholder={`Buscar en ${keyNav}`}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        </div>}
        <ul id="subnavegacion-list">
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {results.map((item, index) => (
            <li
              key={item?.name || item?.title}
              onClick={() => updateURLIndex(item.url, index)}
              id={`${selectedItem === index ? 'selected' : ''}`}>
              { (selectedItem === index)  && <FontAwesomeIcon icon={faCaretRight} />}
              <p>{item?.name || item?.title}</p>
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


/*
placeholder={`Buscar en ${keyNav}`}
*/