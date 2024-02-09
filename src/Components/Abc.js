import MyContext from "../Utils/Context";
import Component from "./useContext";
import { useState } from "react";


const Abc=()=>{

const[text,setText]=useState("");

return(<div>
    <MyContext.Provider value={{text,setText}}>
        <Component/>
    </MyContext.Provider>
</div>)

}

export default Abc;
