import { useState, useEffect} from 'react';
import { useFetch } from './useFetch';
import { FilmsComponent, PeopleComponent, PlanetsComponent, SpeciesComponent, StarshipsComponent, VehiclesComponent } from './selectedComponent';

//                people, https//por parte de Aside
function ShowMain( props ) {
  const { data, loading, error } = useFetch(props.newFileMain);
  const [file,setFile] = useState(props.newFileMain);
  const [selectedKey, setSelectedKey] = useState(props.ckey);

  const componentsMap = {
    "films": FilmsComponent,
    "people": PeopleComponent,
    "planets": PlanetsComponent,
    "species": SpeciesComponent,
    "starships": StarshipsComponent,
    "vehicles": VehiclesComponent,
  };

  useEffect(() => {
    setSelectedKey(props.ckey);
  }, [props.ckey]);

  const SelectedComponent = selectedKey ? componentsMap[selectedKey] : null;

  return (
    <div id="container-right">

      {error && <h2>Error: {error}</h2>}
      {loading && <h2>Loading...</h2>}
      {data && <SelectedComponent data={data} update={props.newFileMain}/>}
      
    </div>
  );
}

export default ShowMain;

/*
*/