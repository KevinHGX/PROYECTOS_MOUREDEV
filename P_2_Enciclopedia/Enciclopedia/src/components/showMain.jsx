import { useState } from 'react';
import { useFetch } from './useFetch';
import { FilmsComponent, PeopleComponent, PlanetsComponent, SpeciesComponent, StarshipsComponent, VehiclesComponent } from './selectedComponent';

//                people, https//por parte de Aside
function ShowMain({ ckey, newFileMain }) {
  const { data, loading, error } = useFetch(newFileMain);
  //console.log("ShowMain:",data.vehicles);
  const [selectedKey, setSelectedKey] = useState(ckey);

  const componentsMap = {
    "films": FilmsComponent,
    "people": PeopleComponent,
    "planets": PlanetsComponent,
    "species": SpeciesComponent,
    "starships": StarshipsComponent,
    "vehicles": VehiclesComponent,
  };

  const SelectedComponent = selectedKey ? componentsMap[selectedKey] : null;

  return (
    <>
      <h1>{data?.name || data?.title}</h1>
    </>
  );
}

export default ShowMain;

/*
{error && <h2>Error: {error}</h2>}
      {loading && <h2>Loading...</h2>}
      {data && <SelectedComponent data={data} />}
*/