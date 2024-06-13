import {useState} from 'react';
import {useFetch} from './components/useFetch';
import AsideList from './components/asideList';
import ShowMain from './components/showMain';
import dotenv from 'dotenv';

import "./styles/style.scss";

function App() {
  const baseUrl = "https://swapi.dev/api/";// verificar la configuracion de env
  const { data, loading, error } = useFetch(baseUrl);
  const [newFile, setNewFile] = useState("https://swapi.dev/api/people/"); 
  const [newFileMain, setNewFileMain] = useState("https://swapi.dev/api/people/1");
  const [ckey,setCKey] = useState('people');
  const [selectedItemNav,setSelectedItemNav] = useState(0);

  // Almacena las claves una vez que los datos estén disponibles
  const keys = data ? Object.keys(data) : [];

  const handleIndex=(key,index)=>{
      setNewFile(`${baseUrl}${key}/`);
      setCKey(key);
      setSelectedItemNav(index);
  }

  return (
   <div className = "App">
     <header className="container_up">
       <h1 id="title"> STAR WARS </h1>
       <nav className="navegacion">
        <ul id="navegacion-list">
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {keys.map((key,index) => (
              <li key={key} onClick={() => handleIndex(key,index)} id={`${selectedItemNav===index ? 'selected':''}`}>{key}</li>
            ))}
        </ul>
       </nav>
     </header>
     <div id="container-down">
      <AsideList url={newFile} setNewURL={setNewFile} setNewFileMain={setNewFileMain} ckey={ckey}/>
      <ShowMain ckey={ckey} newFileMain={newFileMain}/>  
     </div>
   </div>
  );
}

export default App
