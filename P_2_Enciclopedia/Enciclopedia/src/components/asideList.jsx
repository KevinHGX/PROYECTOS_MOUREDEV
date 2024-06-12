import { useState, useEffect } from 'react';
import { useFetch } from './useFetch';

function AsideList({ url, setNewURL, setNewFileMain}) {
  const { data, loading, error } = useFetch(url);
  
  //Almacenar el contenido de result
  let results = (data) ? data.results : [] ;

  useEffect(()=>{
    let aux;
    if (results.length > 0) {
      const firstValue = results[0];
      aux = firstValue.url; 
      setNewFileMain(aux);
    } else {
      console.log("El array está vacío.");
    }
  },[url,data]);

  const handleShowMore = (current) => {
    //let newUrl;
    if(data && data?.next !== null && current !== 'next') { 
      //newUrl = data.next;
      setNewURL(data.next);

    }

    if(data && data?.previous !== null && current !== 'previous'){
      //newUrl = data.previous;
      setNewURL(data.previous);
    }
  };

  return (
    <div id="container-left">
      <ul>
        {error && <li>Error: {error}</li>}
        {loading && <li>Loading...</li>}
        {results.map((item) => (
          <li key={item?.name || item?.title} onClick={() => setNewFileMain(item.url)}>{item?.name || item?.title}</li>
        ))}
      </ul>
      <div id="buttons">      
        <button onClick={() => handleShowMore("previous")}>PREV</button>
        <button onClick={() => handleShowMore("next")}>NEXT</button>
      </div>
    </div>
  );
}

export default AsideList;
