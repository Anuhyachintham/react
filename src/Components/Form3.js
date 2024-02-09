import React from "react";
import { useState } from "react";

const TextForm=()=>{
    const[textarea,setTextarea]=useState("")
    handleSubmit=(event)=>{
       setTextarea(event.target.value)

    }
    return(
        <div>
            <form>
                
        <textarea type="text" value={textarea} onChange={handleSubmit}/>
                
            </form>
        </div>

    )
}
export default TextForm