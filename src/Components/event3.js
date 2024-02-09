import react from "react"
import { useState } from "react"

const Head=()=>{
    const[count,setCount]=useState(0);

    const handleClick=()=>{
setCount(count+1);
    }

    return(<div>
        <h1>{count}</h1>
        <button onClick={handleClick}>Addme one</button>
    </div>)
}
export default Head