import React from "react";

function Component(Props){
    return <h1>{Props.brand.model}</h1>

}

function Modelname(){
    carInfo ={brand:"ford",model:"mustang"}
    return(<div>

        <Component brand={carInfo}/>

    </div>)
}

export default Modelname