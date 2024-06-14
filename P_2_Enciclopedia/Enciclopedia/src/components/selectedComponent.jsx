import { useState, useEffect } from 'react';
import { useFetch, fetchContainerComponent} from './useFetch';

export function truncateText(value, index) {
    const limit = 15; // Define el límite de caracteres

    let aux = value?.name || value?.title || ''; // Valor por defecto

    if (value?.name && value.name.length > limit) {
        aux = value.name.slice(0, limit - 3) + '...';
    } else if (value?.title && value.title.length > limit) {
        aux = value.title.slice(0, limit - 3) + '...';
    }

    return (
        <li key={index}>{aux}</li>
    );
}


const checkStatusObject = (title, data) => {
    return (
    <>
            {Object.entries(data).length !== 0 && <h2 id="title-list">{title}</h2>}
            {Object.entries(data).length !== 0 && (
                <div className="container-a">
                    {Object.entries(data).length > 3 &&
                    <ul className="components-sub-list list-animation">
                        {data.map((value, index) => (
                            truncateText(value,index)
                        ))},
                        {data.map((value, index) => (
                            truncateText(value,index)
                        ))}
                    </ul>}

                    {Object.entries(data).length <= 3 && 
                    <ul className="components-sub-list">
                        {data.map((value, index) => (
                            truncateText(value,index)
                        ))}
                    </ul>}

                </div>
            )}
        </>
    );
}

export const PeopleComponent = ( data, update )=>{
    const props = { "films":data.data.films || [], 
                    "homeworld":data.data.homeworld || '', 
                    "species":data.data.species || [], 
                    "starships":data.data.starships || [], 
                    "vehicles":data.data.vehicles || [] };

    const { dataURL, loading, error} = fetchContainerComponent(props, data.update);

	return(
		<div id="conteiner-component"> 
            {error && <h1>Error: {error}</h1>}
            {loading && <h2>Loading...</h2>}
            {(Object.entries(dataURL).length !== 0) &&
            <div className="card">
                <h2 id="title">{data.data.name}</h2>
                <div id="card-info">  
                    <p><strong>Birth Year:</strong> {data.data.birth_year}</p>
                    <p><strong>Gender:</strong> {data.data.gender}</p>
                    <p><strong>Height:</strong> {data.data.height} cm</p>
                    <p><strong>Mass:</strong> {data.data.mass} kg</p>
                    <p><strong>Skin Color:</strong> {data.data.skin_color}</p>
                    <p><strong>Eye Color:</strong> {data.data.eye_color}</p>
                    <p><strong>Hair Color:</strong> {data.data.hair_color}</p>
                </div>

                <h2 id="homeworld" >Homeworld</h2>
                <p id="homeworld-text">{dataURL?.homeworld.name}</p>
    
                {checkStatusObject('Films',dataURL.films)}                

                {checkStatusObject('Species',dataURL.species)}

                {checkStatusObject('Starships',dataURL.starships)}

                {checkStatusObject('Vehicles',dataURL.vehicles)}                

            </div>
            }
		</div>
	);
}

export const FilmsComponent = ( data, update )=>{
    const props = { "characters":data.data.characters || [], 
                    "planets":data.data.planets || [], 
                    "species":data.data.species || [], 
                    "starships":data.data.starships || [], 
                    "vehicles":data.data.vehicles || [] };

    const { dataURL, loading, error} = fetchContainerComponent(props, data.update);

	return(
		<div id="conteiner-component"> 
            {error && <h1>Error: {error}</h1>}
            {loading && <h2>Loading...</h2>}
            {(Object.entries(dataURL).length !== 0) && 
                <div className="card">
                    <h2 id="title">{data.data.title}</h2>
                    <div id="card-info">                        
                        <p><strong>Director:</strong> {data.data.title} </p>
                        <p><strong>Producer:</strong> {data.data.producer} </p>
                        <p><strong>Release Date:</strong> {data.data.release_date} </p>
                        <p><strong>Episode ID:</strong> {data.data.episode_id} </p>
                    </div>

                    <div id="description">
                        <h3>Open Crawl</h3>
                        <p>{data.data.opening_crawl} </p>
                    </div>

                    {checkStatusObject('Character',dataURL.characters)}

                    {checkStatusObject('Planets',dataURL.planets)}

                    {checkStatusObject('Species',dataURL.species)}
                    
                    {checkStatusObject('Starships',dataURL.starships)}
                
                    {checkStatusObject('Vehicles',dataURL.vehicles)}
                
                </div>
            }
		
		</div>
	);
}


export const PlanetsComponent = ( data, update )=>{
    const props = { "films":data.data.films || [], 
                    "residents":data.data.residents || [] };

    const { dataURL, loading, error} = fetchContainerComponent(props, data.update);

	return(
		<div id="conteiner-component"> 
            {error && <h1>Error: {error}</h1>}
            {loading && <h2>Loading...</h2>}
            {(Object.entries(dataURL).length !== 0) && 
                <div className="card">
                <h2 id="title">{data.data.name}</h2>
                <div id="card-info">
                    <p><strong>Climate:</strong>{data.data.climate}</p>
                    <p><strong>Diameter:</strong>{data.data.diamater} km</p>
                    <p><strong>Gravity:</strong>{data.data.gravity}</p>
                    <p><strong>Population:</strong>{data.data.population}</p>
                    <p><strong>Orbital Period:</strong>{data.data.orbital_period}</p>
                    <p><strong>Rotation Period:</strong>{data.data.rotation_period}</p>
                    <p><strong>Surface Water:</strong>{data.data.surface_water}</p>
                    <p><strong>Terrain:</strong>{data.data.terrain}</p>
                </div>

                {checkStatusObject('Films',dataURL.films)}

                {checkStatusObject('Residents',dataURL.residents)}

            </div>
            }
		
		</div>
	);
}

export const SpeciesComponent = ( data, update )=>{
    const props = { "homeworld":data.data.homeworld || '', 
                    "people":data.data.people || [], 
                    "films":data.data.films || []};

    const { dataURL, loading, error} = fetchContainerComponent(props, data.update);

	return(
		<div id="conteiner-component"> 
            {error && <h2>Error: {error}</h2>}
            {loading && <h2>Loading...</h2>}
            {(Object.entries(dataURL).length !== 0) && 
            <div className="card">
                <h2 id="title">{data.data.name}</h2>
                <div id="card-info">            
                    <p><strong>Language:</strong>{data.data.language}</p>
                    <p><strong>Average Height:</strong>{data.data.average_height} meters</p>
                    <p><strong>Average Lifespan:</strong>{data.data.average_lifespan} years</p>
                    <p><strong>Classification:</strong>{data.data.classification}</p>
                    <p><strong>Designation:</strong>{data.data.designation}</p>
                    <p><strong>Eye Colors:</strong>{data.data.eye_colors}</p>
                    <p><strong>Hair Colors:</strong>{data.data.hair_colors}</p>
                    <p><strong>Skin Colors:</strong>{data.data.skin_colors}</p>
                </div>

                <h2 id="homeworld" >Homeworld</h2>
                <p id="homeworld-text">{dataURL?.homeworld.name}</p>

                {checkStatusObject('Films',dataURL.films)}

                {checkStatusObject('People',dataURL.people)}
            </div>
            }
        </div>
	);
}


export const StarshipsComponent = ( data, update )=>{
    const props = { "films":data.data.films || [], 
                     "pilots":data.data.pilots || []};

    const { dataURL, loading, error} = fetchContainerComponent(props, data.update);

	return(
		<div id="conteiner-component"> 
              {error && <h2>Error: {error}</h2>}
              {loading && <h2>Loading...</h2>}
		      {(Object.entries(dataURL).length !== 0) && 
                 <div className="card">
                    <h2 id="title">{data.data.name}</h2>
                    <div id="card-info">
                        <p><strong>MGLT:</strong>{data.data.MGLT}</p>
                        <p><strong>Consumables:</strong> {data.data.consumables} years</p>
                        <p><strong>Cargo Capacity:</strong>{data.data.cargo_capacity}</p>
                        <p><strong>Cost in Credits:</strong>{data.data.cost_in_credits}</p>
                        <p><strong>Crew:</strong>{data.data.crew}</p>
                        <p><strong>Hyperdrive Rating:</strong>{data.data.hyperdrive_rating}</p>
                        <p><strong>Length:</strong> {data.data.length} meters</p>
                        <p><strong>Manufacturer:</strong> {data.data.manufacturer} </p>
                        <p><strong>Max Atmosphering Speed:</strong>{data.data.max_atmosphering_speed}</p>
                        <p><strong>Model:</strong>{data.data.model}</p>
                        <p><strong>Passengers:</strong>{data.data.passengers}</p>
                        <p><strong>Starship Class:</strong>{data.data.starship_class}</p>
                    </div>

                    {checkStatusObject('Films',dataURL.films)}

                    {checkStatusObject('Pilots',dataURL.pilots)}
                   
                </div>
                }
		</div>
	);
}

export const VehiclesComponent = ( data, update )=>{
    const props = { "films":data.data.films || [], 
                     "pilots":data.data.pilots || [] };

    const { dataURL, loading, error} = fetchContainerComponent(props, data.update);

	return(
		<div  id="conteiner-component"> 
              {error && <h2>Error: {error}</h2>}
              {loading && <h2>Loading...</h2>}
              {(Object.entries(dataURL).length !== 0) && 
                 <div className="card">
                    <h2 id="title">{data.data.name}</h2>
                    <div id="card-info">  
                        <p><strong>Cargo Capacity:</strong>{data.data.cargo_capacity}</p>
                        <p><strong>Consumables:</strong>{data.data.consumables} months</p>
                        <p><strong>Cost in Credits:</strong>{data.data.cost_in_credits}</p>
                        <p><strong>Crew:</strong>{data.data.crew}</p>
                        <p><strong>Length:</strong> {data.data.length} meters</p>
                        <p><strong>Manufacturer:</strong> {data.data.manufacturer}</p>
                        <p><strong>Max Atmosphering Speed:</strong>{data.data.max_atmosphering_speed}</p>
                        <p><strong>Model:</strong>{data.data.model}</p>
                        <p><strong>Passengers:</strong>{data.data.passengers}</p>
                        <p><strong>Vehicle Class:</strong>{data.data.vehicle_class}</p>
                    </div>

                    {checkStatusObject('Films',dataURL.films)}

                    {checkStatusObject('Pilots',dataURL.pilots)}

                </div>
                }
        </div>
	);
}
