import React from "react";

import { useState } from "react";

const FavouriteColor=()=>{
const[color,setColor]=useState("red")


    return(<div>
        <h1>My favourite color is {color}</h1>
<button type="button" onClick={()=>setColor('blue')}>blue</button>
    </div>)
}

export default FavouriteColor