import React from "react";

//props for

export function SoccerPlayers(props){
    console.log(props);
    return (
        <div>
            <h1> Names: {props.user.name} </h1>
            <h1> Country: {props.user.country} </h1>
            <h1> Searches: {props.user.searches} </h1>
        </div>
    );
}

export default SoccerPlayers;