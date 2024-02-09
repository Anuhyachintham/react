import React from "react";
const Authcheck=(Component)=>{
let Authchecked= true;

    return(props)=>{
        if(Authchecked){
            return (<Component {...props}/>)
        }
        else {
        return(<Login/>)
        }
    }
}

const User=(props)=>{

    return(<div>
    <h1>This is user component</h1>
    <h2>hello{props.username}</h2>
    </div>)
}

const Login=()=>{

    return(<h1>This is login component</h1>)
}

const Authchecked=Authcheck(User)

export default Authchecked