import { useState, useEffect } from 'react';
import { useFetch, fetchContainerComponent} from './useFetch';

export const PeopleComponent = ( data )=>{
    const props = { "films":data.data.films || [], 
                    "homeworld":data.data.homeworld || '', 
                    "species":data.data.species || [], 
                    "starships":data.data.starships || [], 
                    "vehicles":data.data.vehicles || [] };

    const { dataURL, loading, error} = fetchContainerComponent(props);

    console.log("DATAURL: ",dataURL); 

	return(
		<div> 
            <h1 id="character"> CHARACTER </h1>
            {error && <h1>Error: {error}</h1>}
            {loading && <h2>Loading...</h2>}
            {dataURL && 
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
                <p>dataURL.homeworld.name</p>

                <h2>Films</h2>
                <ul>
                    {dataURL.films.map((film, index) => (
                        <li key={index}> film.title </li>
                    ))}
                </ul>

                <h2>Species</h2>
                <ul>
                    {dataURL.species.map((species, index) => (
                        <li key={index}>species.name</li>
                    ))}
                </ul>

                <h2>Starships</h2>
                <ul>
                    {dataURL.starships.map((starship, index) => (
                        <li key={index}>starship.name</li>
                    ))}
                </ul>

                <h2>Vehicles</h2>
                <ul>
                    {dataURL.vehicles.map((vehicle, index) => (
                        <li key={index}>vehicle.name</li>
                    ))}
                </ul>
            </div>
            }
		</div>
	);
}

export const FilmsComponent = ( data )=>{

    const props = { "characters":data.characters || [], 
                    "planets":data.planets || [], 
                    "species":data.species || [], 
                    "starships":data.starships || [], 
                    "vehicles":data.vehicles || [] };

    const { dataURL, loading, error} = fetchContainerComponent(props);

	return(
		<div> 
            <h1 id="film"> FILMS </h1>
            {error && <h1>Error: {error}</h1>}
            {loading && <h2>Loading...</h2>}
            {dataURL && 
                <div className="film-card">
                    <h2>{data.title}</h2>
                    <div id="film-card-info">                        
                        <p><strong>Director:</strong> {data.title} </p>
                        <p><strong>Producer:</strong> {data.producer} </p>
                        <p><strong>Release Date:</strong> {data.release_date} </p>
                        <p><strong>Opening Crawl:</strong> {data.opening_crawl} </p>
                        <p><strong>Episode ID:</strong> {data.episode_id} </p>
                    </div>

                    <h2>Characters</h2>
                    <ul>
                        {dataURL.characters.map((character,index)=>{
                            <li key={index}> {character.name} </li>
                        })}
                    </ul>

                    <h2>Planets</h2>
                    <ul>
                        {dataURL.planets.map((planet,index)=>{
                            <li key={index}>{planet.name}</li>
                        })}
                    </ul>

                    <h2>Species</h2>
                    <ul>
                       {dataURL.species.map((specie,index)=>{
                            <li key={index}>{specie.name}</li>
                       })}
                    </ul>

                    <h2>Starships</h2>
                    <ul>
                        {dataURL.starships.map((star,index)=>{
                            <li key={index}>{star.name}</li>
                        })}
                    </ul>

                    <h2>Vehicles</h2>
                    <ul>
                        {dataURL.vehicles.map((vehicle,index)=>{
                            <li key={index}>{vehicle.name}</li>
                        })}
                    </ul>
                </div>
            }
		
		</div>
	);
}


export const PlanetsComponent = ( data )=>{
     const props = { "films":data.films || [], 
                    "residents":data.residents || [] };

    const { dataURL, loading, error} = fetchContainerComponent(props);

	return(
		<div> 
            <h1 id="planet"> PLANET </h1>
            {error && <h1>Error: {error}</h1>}
            {loading && <h2>Loading...</h2>}
            {dataURL && 
                <div className="planet-card">
                <h2>{data.name}</h2>
                <div id="planet-card-info">
                    <p><strong>Climate:</strong>{data.climate}</p>
                    <p><strong>Diameter:</strong>{data.diamater} km</p>
                    <p><strong>Gravity:</strong>{data.gravity}</p>
                    <p><strong>Population:</strong>{data.population}</p>
                    <p><strong>Orbital Period:</strong>{data.orbital_period}</p>
                    <p><strong>Rotation Period:</strong>{data.rotation_period}</p>
                    <p><strong>Surface Water:</strong>{datat.surface_water}</p>
                    <p><strong>Terrain:</strong>{data.terrain}</p>
                </div>

                <h2>Films</h2>
                <ul>
                    {dataURL.films.map((film,index)=>{
                        <li key={index}> {film.title} </li>
                    })}
                </ul>

                <h2>Residents</h2>
                <ul>
                    {dataURL.residents.map((resident,index)=>{
                        <li key={index}> {resident.name} </li>
                    })}
                </ul>
            </div>
            }
		
		</div>
	);
}

export const SpeciesComponent = ( data )=>{
    const props = { "homeworld":data.homeworld || '', 
                    "people":data.people || [], 
                    "films":data.films || []};

    const { dataURL, loading, error} = fetchContainerComponent(props);

	return(
		<div> 
            <h1 id="species"> SPECIES </h1>
            {error && <h2>Error: {error}</h2>}
            {loading && <h2>Loading...</h2>}
            {dataURL && 
            <div className="species-card">
                <h2>{data.name}</h2>
                <div id="species-card-info">            
                    <p><strong>Language:</strong>{data.language}</p>
                    <p><strong>Average Height:</strong>{data.average_height} meters</p>
                    <p><strong>Average Lifespan:</strong>{data.average_lifespan} years</p>
                    <p><strong>Classification:</strong>{data.classification}</p>
                    <p><strong>Designation:</strong>{data.designation}</p>
                    <p><strong>Eye Colors:</strong>{data.eye_colors}</p>
                    <p><strong>Hair Colors:</strong>{data.hair_colors}</p>
                    <p><strong>Skin Colors:</strong>{data.skin_colors}</p>
                </div>

                <h2>Homeworld</h2>
                <p>{dataURL.homeworld.name}</p>

                <h2>People</h2>
                <ul>
                    {dataURL.people.map((p,index)=>{
                        <li key={index}>{p.name}</li>
                    })}
                </ul>

                <h2>Films</h2>
                <ul>
                    {dataURL.films.map((film,index)=>{
                        <li key={index}>{film.title}</li>
                    })}
                </ul>
            </div>
            }
        </div>
	);
}


export const StarshipsComponent = ( data )=>{
    const props = { "films":data.films || [], 
                     "pilots":data.pilots || []};

    const { dataURL, loading, error} = fetchContainerComponent(props);

	return(
		<div> 
              <h1 id="species"> STARSHIPS </h1>
              {error && <h2>Error: {error}</h2>}
              {loading && <h2>Loading...</h2>}
		      {dataURL && 
                 <div className="starship-card">
                    <h2>{data.name}</h2>
                    <div id="statship-card-info">
                        <p><strong>MGLT:</strong>{data.MGLT}</p>
                        <p><strong>Consumables:</strong> {data.consumables} years</p>
                        <p><strong>Cargo Capacity:</strong>{data.cargo_capacity}</p>
                        <p><strong>Cost in Credits:</strong>{data.cost_in_credits}</p>
                        <p><strong>Crew:</strong>{data.crew}</p>
                        <p><strong>Hyperdrive Rating:</strong>{data.hyperdrive_rating}</p>
                        <p><strong>Length:</strong> {data.length} meters</p>
                        <p><strong>Manufacturer:</strong> {data.manufacturer} </p>
                        <p><strong>Max Atmosphering Speed:</strong>{data.max_atmosphering_speed}</p>
                        <p><strong>Model:</strong>{data.model}</p>
                        <p><strong>Passengers:</strong>{data.passengers}</p>
                        <p><strong>Starship Class:</strong>{data.starship_class}</p>
                    </div>

                    <h2>Films</h2>
                    <ul>
                        {dataURL.films.map((film,index)=>{
                            <li key={index}>{film.title}</li>
                        })}
                    </ul>

                    <h2>Pilots</h2>
                    <ul>
                        {dataURL.pilots.map((pilot,index)=>{
                            <li key={index}>{pilot.name}</li>
                        })}
                    </ul>
                </div>
                }
		</div>
	);
}

export const VehiclesComponent = ( data )=>{
    const props = { "films":data.films || [], 
                     "pilots":data.pilots || [] };

    const { dataURL, loading, error} = fetchContainerComponent(props);

	return(
		<div> 
              <h1 id="vehicles"> VEHICLES </h1>
              {error && <h2>Error: {error}</h2>}
              {loading && <h2>Loading...</h2>}
              {dataURL && 
                 <div className="vehicle-card">
                    <h1>{data.name}</h1>
                    <div id="vehicle-card-info">  
                        <p><strong>Cargo Capacity:</strong>{data.cargo_capacity}</p>
                        <p><strong>Consumables:</strong>{data.consumables} months</p>
                        <p><strong>Cost in Credits:</strong>{data.cost_in_credits}</p>
                        <p><strong>Crew:</strong>{data.crew}</p>
                        <p><strong>Length:</strong> {data.length} meters</p>
                        <p><strong>Manufacturer:</strong> {data.manufacturer}</p>
                        <p><strong>Max Atmosphering Speed:</strong>{data.max_atmosphering_speed}</p>
                        <p><strong>Model:</strong>{data.model}</p>
                        <p><strong>Passengers:</strong>{data.passengers}</p>
                        <p><strong>Vehicle Class:</strong>{data.vehicle_class}</p>
                    </div>

                    <h2>Films</h2>
                    <ul>
                        {dataURL.films.map((film,index)=>{
                            <li key={index}>{film.title}</li>
                        })}
                    </ul>

                    <h2>Pilots</h2>
                    <ul>
                        {dataURL.pilots.map((pilot,index)=>{
                            <li key={index}>{pilot.name}</li>
                        })}
                    </ul>
                </div>
                }
        </div>
	);
}
