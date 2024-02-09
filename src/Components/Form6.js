import React from "react";
import { useState } from "react";

const Countries=[{name:'india',value:'IN',cities:['Delhi','Mumbai']},
{name:'pak',value:'pk',cities:['Lohore','Karachi']},
{name:'bangladesh',value:'BG',cities:['dhaka','chittagong']}
];

const Country=()=>{

const[Countri,setCountri]=useState({name:"",value:"",cities:[]})

const handleChange=(event)=>{
    console.log(event.target.value)
  
setCountri(event.target.value)
}
    return(<div>
        <select value={Countri} onChange={handleChange}>
            {Countries.map((each)=>
            {return (<option value={each.name}>{each.name}</option>)})}
        </select>
        <select value={Countri} onChange={handleChange}>
            {Countries.map((each,index)=>
            {return (<option value={each.index}>{each.cities}</option>)})}
        </select>

    </div>)
}
export default Country