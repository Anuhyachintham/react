import React from "react";
const shoot=()=>{
alert("shoot");
}

const trigger=(a)=>{
alert(a)
}

const handleClick=(a,b)=>{
    alert(b.type);

}


function Football(){
    return(<div>
        <button onClick={shoot}>Take a shoot</button>
        
        <button onClick={()=>trigger("tri")}>Tale a Trigger</button>
        <button onClick={(event)=>handleClick("handleclick",event)}>handleclick</button>
    </div>)
}

export default Football