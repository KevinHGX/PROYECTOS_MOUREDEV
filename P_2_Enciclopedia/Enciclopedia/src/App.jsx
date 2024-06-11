import {useState} from 'react';
import {useFetch} from './components/useFetch';
import AsideList from './components/asideList';
import ShowMain from './components/showMain';
import "./App.css";
import dotenv from 'dotenv';

function App() {
  const baseUrl =  "https://swapi.dev/api/";// verificar la configuracion de env
  const { data, loading, error } = useFetch(baseUrl);
  const [newFile, setNewFile] = useState("https://swapi.dev/api/people/"); 
  const [newFileMain, setNewFileMain] = useState("https://swapi.dev/api/people/1");
  const [ckey,setCKey] = useState('people');

  // Almacena las claves una vez que los datos estén disponibles
  const keys = data ? Object.keys(data) : [];

  const handleIndex=(key)=>{
      setNewFile(`${baseUrl}${key}/`);
      setCKey(key);
  }

  return (
   <div className = "App">
     <header className="container_up">
       <h1 id="title"> STAR WARS </h1>
       <nav className="navegacion">
        <ul>
          {error && <li>Error: {error}</li>}
          {loading && <li>Loading...</li>}
          {keys.map((key) => (
              <li key={key} onClick={() => handleIndex(key)}>{key}</li>
            ))}
        </ul>
       </nav>
     </header>
     <div id="container-down">
      <AsideList url={newFile} setNewURL={setNewFile} setNewFileMain={setNewFileMain}/>
      <ShowMain ckey={ckey} newFileMain={newFileMain}/>  
     </div>
   </div>
  );
}

export default App
