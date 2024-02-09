import React from "react";

import { useState } from "react";

const MultiHook=()=>{
    const[car,setCar]=useState({
        brand:"buma",
        model:"Mustang",
        year:"1964",
        color:"red"

    })
    const updateColor=()=>{
setCar(previousState=>{
    return{...previousState, color:'pink'}})

}
    
    return(<div>
        <h1>{car.brand}</h1>
        <h2>i am a{car.color} {car.model}{car.year}</h2>
        <button type="button" onClick={updateColor}>blue</button>

    </div>)

    }
export default MultiHook