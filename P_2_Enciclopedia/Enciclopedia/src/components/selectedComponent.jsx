import { useState, useEffect } from 'react';
import { useFetch, fetchContainerComponent} from './useFetch';

export const PeopleComponent = ( data, update )=>{
    console.log("PeopleComponent");
    console.log(data);
    const props = { "films":data.data.films || [], 
                    "homeworld":data.data.homeworld || '', 
                    "species":data.data.species || [], 
                    "starships":data.data.starships || [], 
                    "vehicles":data.data.vehicles || [] };

    const { dataURL, loading, error} = fetchContainerComponent(props, data.update);

	return(
		<div> 
            <h1 id="character"> CHARACTER </h1>
            {error && <h1>Error: {error}</h1>}
            {loading && <h2>Loading...</h2>}
            {(Object.entries(dataURL).length !== 0) &&
            <div className="character-card">
                <h2>{data.data.name}</h2>
                <div id="character-card-info">  
                    <p><strong>Birth Year:</strong> {data.data.birth_year}</p>
                    <p><strong>Gender:</strong> {data.data.gender}</p>
                    <p><strong>Height:</strong> {data.data.height} cm</p>
                    <p><strong>Mass:</strong> {data.data.mass} kg</p>
                    <p><strong>Skin Color:</strong> {data.data.skin_color}</p>
                    <p><strong>Eye Color:</strong> {data.data.eye_color}</p>
                    <p><strong>Hair Color:</strong> {data.data.hair_color}</p>
                </div>
                <h2>Homeworld</h2>
                <p>{dataURL?.homeworld.name}</p>

                <h2>Films</h2>
                <ul>
                    {dataURL.films.map((film,index)=>(
                        <li key={index}> {film?.title} </li>
                    ))}
                    
                </ul>

                <h2>Species</h2>
                <ul>
                   {dataURL.species.map((specie,index)=>(
                        <li key={index}>{specie?.name}</li>
                    ))}
                </ul>

                <h2>Starships</h2>
                <ul>
                    {dataURL.starships.map((star,index)=>(
                        <li key={index}>{star?.name}</li>
                    ))}
                </ul>

                <h2>Vehicles</h2>
                <ul>
                    {dataURL.vehicles.map((vehicle,index)=>(
                        <li key={index}>{vehicle?.name}</li>
                    ))}
                </ul>
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
		<div> 
            <h1 id="film"> FILMS </h1>
            {error && <h1>Error: {error}</h1>}
            {loading && <h2>Loading...</h2>}
            {(Object.entries(dataURL).length !== 0) && 
                <div className="film-card">
                    <h2>{data.data.title}</h2>
                    <div id="film-card-info">                        
                        <p><strong>Director:</strong> {data.data.title} </p>
                        <p><strong>Producer:</strong> {data.data.producer} </p>
                        <p><strong>Release Date:</strong> {data.data.release_date} </p>
                        <p><strong>Opening Crawl:</strong> {data.data.opening_crawl} </p>
                        <p><strong>Episode ID:</strong> {data.data.episode_id} </p>
                    </div>

                    <h2>Characters</h2>
                    <ul>
                        {dataURL.characters.map((character,index)=>(
                            <li key={index}> {character.name} </li>
                        ))}
                    </ul>

                    <h2>Planets</h2>
                    <ul>
                        {dataURL.planets.map((planet,index)=>(
                            <li key={index}>{planet.name}</li>
                        ))}
                    </ul>

                    <h2>Species</h2>
                    <ul>
                       {dataURL.species.map((specie,index)=>(
                            <li key={index}>{specie.name}</li>
                       ))}
                    </ul>

                    <h2>Starships</h2>
                    <ul>
                        {dataURL.starships.map((star,index)=>(
                            <li key={index}>{star.name}</li>
                        ))}
                    </ul>

                    <h2>Vehicles</h2>
                    <ul>
                        {dataURL.vehicles.map((vehicle,index)=>(
                            <li key={index}>{vehicle.name}</li>
                        ))}
                    </ul>
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
		<div> 
            <h1 id="planet"> PLANET </h1>
            {error && <h1>Error: {error}</h1>}
            {loading && <h2>Loading...</h2>}
            {(Object.entries(dataURL).length !== 0) && 
                <div className="planet-card">
                <h2>{data.data.name}</h2>
                <div id="planet-card-info">
                    <p><strong>Climate:</strong>{data.data.climate}</p>
                    <p><strong>Diameter:</strong>{data.data.diamater} km</p>
                    <p><strong>Gravity:</strong>{data.data.gravity}</p>
                    <p><strong>Population:</strong>{data.data.population}</p>
                    <p><strong>Orbital Period:</strong>{data.data.orbital_period}</p>
                    <p><strong>Rotation Period:</strong>{data.data.rotation_period}</p>
                    <p><strong>Surface Water:</strong>{data.data.surface_water}</p>
                    <p><strong>Terrain:</strong>{data.data.terrain}</p>
                </div>

                <h2>Films</h2>
                <ul>
                    {dataURL.films.map((film,index)=>(
                        <li key={index}> {film.title} </li>
                    ))}
                </ul>

                <h2>Residents</h2>
                <ul>
                    {dataURL.residents.map((resident,index)=>(
                        <li key={index}> {resident.name} </li>
                    ))}
                </ul>
            </div>
            }
		
		</div>
	);
}

export const SpeciesComponent = ( data, update )=>{
    console.log("SpeciesComponent");
    console.log(data);
    const props = { "homeworld":data.data.homeworld || '', 
                    "people":data.data.people || [], 
                    "films":data.data.films || []};

    const { dataURL, loading, error} = fetchContainerComponent(props, data.update);

	return(
		<div> 
            <h1 id="species"> SPECIES </h1>
            {error && <h2>Error: {error}</h2>}
            {loading && <h2>Loading...</h2>}
            {(Object.entries(dataURL).length !== 0) && 
            <div className="species-card">
                <h2>{data.data.name}</h2>
                <div id="species-card-info">            
                    <p><strong>Language:</strong>{data.data.language}</p>
                    <p><strong>Average Height:</strong>{data.data.average_height} meters</p>
                    <p><strong>Average Lifespan:</strong>{data.data.average_lifespan} years</p>
                    <p><strong>Classification:</strong>{data.data.classification}</p>
                    <p><strong>Designation:</strong>{data.data.designation}</p>
                    <p><strong>Eye Colors:</strong>{data.data.eye_colors}</p>
                    <p><strong>Hair Colors:</strong>{data.data.hair_colors}</p>
                    <p><strong>Skin Colors:</strong>{data.data.skin_colors}</p>
                </div>

                <h2>Homeworld</h2>
                <p>{dataURL.homeworld.name}</p>

                <h2>People</h2>
                <ul>
                    {dataURL.people.map((p,index)=>(
                        <li key={index}>{p.name}</li>
                    ))}
                </ul>

                <h2>Films</h2>
                <ul>
                    {dataURL.films.map((film,index)=>(
                        <li key={index}>{film.title}</li>
                    ))}
                </ul>
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
		<div> 
              <h1 id="species"> STARSHIPS </h1>
              {error && <h2>Error: {error}</h2>}
              {loading && <h2>Loading...</h2>}
		      {(Object.entries(dataURL).length !== 0) && 
                 <div className="starship-card">
                    <h2>{data.data.name}</h2>
                    <div id="statship-card-info">
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

                    <h2>Films</h2>
                    <ul>
                        {dataURL.films.map((film,index)=>(
                            <li key={index}>{film.title}</li>
                        ))}
                    </ul>

                    <h2>Pilots</h2>
                    <ul>
                        {dataURL.pilots.map((pilot,index)=>(
                            <li key={index}>{pilot.name}</li>
                        ))}
                    </ul>
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
		<div> 
              <h1 id="vehicles"> VEHICLES </h1>
              {error && <h2>Error: {error}</h2>}
              {loading && <h2>Loading...</h2>}
              {(Object.entries(dataURL).length !== 0) && 
                 <div className="vehicle-card">
                    <h1>{data.data.name}</h1>
                    <div id="vehicle-card-info">  
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

                    <h2>Films</h2>
                    <ul>
                        {dataURL.films.map((film,index)=>(
                            <li key={index}>{film.title}</li>
                        ))}
                    </ul>

                    <h2>Pilots</h2>
                    <ul>
                        {dataURL.pilots.map((pilot,index)=>(
                            <li key={index}>{pilot.name}</li>
                        ))}
                    </ul>
                </div>
                }
        </div>
	);
}
