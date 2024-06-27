import React from 'react';
import { useState, useContext, useEffect } from "react";
import transition from "../transition";
import { UserContext } from "../App";

import {  useAxios } from "./request/axios";
import axios from 'axios';


import SvgComponent from "./svg/SvgComponent";

//Fetch to MongoDB
const ShowRanking = () => {
    const user = useContext(UserContext);
    const { data, loading, error } = useAxios();
    // Asegúrate de que data es un array
    const primary = data ? data.slice(0, 3) : [];
    const secondary = data ? data.slice(3) : [];

    const User = ({ target, index }) => {
        return (
            <>
                <h2 id="ranking">{index + 1}</h2>
                <h2 id="name">{target.name}</h2>
                <div className="section">
                    <p>{target.category} - {target.level}</p>
                </div>
                <h1 id="score">{target.score}</h1>
            </>
        );
    };

    const UserComponent = ({ target, index }) => {
        return (
            <li id="user" className={`${(index%2===0)?'users1':'users2'}`} style={user.ranking === (index + 4) ? { background: 'var(--color-select-pink)', color: 'var(--color-gray)' } : {}}>
                <User target={target} index={index + 3} />
            </li>
        );
    };

    const BestUser = ({ target, index }) => {
        return (
            <div className="bestUser" id={`user_${index}`}>
                <User target={target} index={index} />
            </div>
        );
    };

    return (
        <div className="dataFetch">
            {error && <h1 className="assert">STATUS: {error.message}</h1>}
            {loading && <h1 className="load">Processing Request...</h1>}
            {data && (
                <>
                    <div id="primary">
                        {primary.map((target, index) => (
                            <BestUser key={target._id} target={target} index={index} />
                        ))}
                    </div>
                    <ul id="secondary">
                        {secondary.map((target, index) => (
                            <UserComponent key={target._id} target={target} index={index} />
                        ))}
                    </ul>
                </>
            )}
        </div>
    );
};

//Context
const ShowPlayer=()=>{

    const user = useContext(UserContext);
    //console.log("Show:",user);
    return (<>
        <div className="player-score">
            <div className="player">   
                <h1 id="score">{user.score}</h1>
                <div className="description">                    
                    <h2 id="name">Usuario: {user.name}</h2>
                    <div className="section">
                        <p>{user.category} - {user.level}</p>
                    </div>
                    <h2 id="ranking"> Position: {user.ranking} </h2>
                </div>
            </div>
        </div>
    </>)
}

/*------------------------------------------------------------*/ 
const Ranking=()=>{
    const user = useContext(UserContext);

    //agregar useContex, para el caso de que el usuaro complete el Quiz
    //afectar a conteinar down
    return (<>
        
        <div className="container-ranking">
            <div className="container_up">
                <h1 id="title-ranking">
                    Ranking de Quizify
                </h1>
                <p id="description">
                Clasificación por tiempo, temática y dificultad. Compite con otros usuarios en tus temáticas y niveles favoritos. Mejora tu posición y conviértete en un experto reconocido en cada área.
                </p>
            </div>
            <div  className={`${(user.status) ? 'container_down_data' : 'container_down'}`}>
                {user.status && < ShowPlayer id="showplayer"/>}
                <ShowRanking/>
            </div>
        </div>
    </>);
}

const NewRanking = transition(Ranking);

export default NewRanking;

