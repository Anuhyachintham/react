import { useState,useEffect } from "react";
import React from "react";

const Hook=()=>{
    const [count,setCount]=useState(0);
    const[calculation,setCalculation]=useState(0);


useEffect(()=>{
    setCalculation(()=>count*2)
},[count])

    return(<div>
        <p>Count:{count}</p>
<button type="submit" onClick={()=>setCount((count)=>count+1)}>+</button>
<p>Calculation:{calculation}</p>
    </div>)
}

export default Hook