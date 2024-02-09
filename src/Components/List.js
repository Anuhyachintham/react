import React from "react"
const List=(props)=>{
    return(<div>
        <h1>{props.brand}</h1>
    </div>)

}

const Glist=()=>{
    const Cars=['Ford','Bmw','Audi']
    return(<div>
<h1>who lives in my garage</h1>
<ul>
{Cars.map((each)=><List brand={each}/>)}
</ul>
    </div>)
}

export default Glist