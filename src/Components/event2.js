import React, { useState } from "react";


const Body=()=>{
const [num,setNum]=useState(false);
const[btn,setBtn]=useState(false);


const handleClick=()=>{
setNum(!num);
setBtn(!btn)
}

return (
    <div>
        <h2> {
            num ?
                "onClick event performed" :
                "onClick event not performed"
        }
        </h2>
        <button onClick={handleClick}>
            {btn ? "clicked" : "onClick"}
        </button>
    </div>
);
    }


export default Body