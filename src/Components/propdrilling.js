import React from "react";
import { useState } from "react";

const PropDrilling=()=>{
const [user,setUser]=useState({name:"Anuhya",email:"anuhya.chintham@gmail.com"})

    return(<div>
<Body user={user}/>
    </div>)
}

const Body=({user})=>{
    
    return(<div>
<ResturantCard user={user}/>
    </div>)
}

const ResturantCard=({user})=>{

    return(<div>
<h4>{user.name}</h4>
<p>{user.email}</p>
    </div>)
}

export default PropDrilling