import React from "react";

function Band(Props){
    return <h1>{Props.brand} is car</h1>
}

function Garage(){
    return <Band brand="Ford"/>
}




export default Garage;
