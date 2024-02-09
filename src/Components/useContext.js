import MyContext from "../Utils/Context";

import { useContext, useState } from "react";

const Component =()=>{

    const{text,setText}=useContext(MyContext);

    return(<div>
<h1>{text}</h1>
<button onClick={()=>setText('Hello World')}>click me</button>
    </div>

    )
}

export default Component;