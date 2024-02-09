import React, { useState } from "react";




const Form=()=>{
    const[name,setName]=useState("")

    const handleSubmit=(event)=>{
        event.preventDefault();
        alert(`the name you entered was: ${name}`)
    
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label>Enter your name:
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                    <p>name:{name}</p>
                    </label>
                    <input type="submit"/>
            </form>
        </div>
    )
}
export default Form