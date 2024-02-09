import React from "react";
const Keylist=(props)=>{
    return(<div>
<h1>i am a {props.brand}</h1>
    </div>)
}

const Gkey=()=>{
    const cars=[{id:1,brand:"Ford"},
{id:2,brand:"BMW",
id:3,brand:"Audi"}];
    return(<div>
        <ul>
{cars.map((each)=>
    <Keylist key={each.id} brand={each.brand}/>
)}
</ul>
    </div>)
}

export default Gkey