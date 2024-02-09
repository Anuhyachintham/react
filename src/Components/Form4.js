import React from "react";
import { useState } from "react";

const Option=()=>{
    const [myCar,setMyCar]=useState("Volvo")

    const handleChange=(event)=>{
setMyCar(event.target.value)
    }

    return(<div>
        <form>
        <select value={myCar} onChange={handleChange}>
            <option value="Ford">Ford</option>
            <option value="Volvo">Volvo</option>
            <option value="fiat">fiat</option>
        </select>
        </form>
    </div>

    

    )
}
export default Option