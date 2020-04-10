import React from "react";

export function SoccerPlayers(props){
    console.log(props);
    return (
        <div>
            <h2> Names: {props.user.country} </h2>
        </div>
    );
}

export default SoccerPlayers;