import React from "react";

const NavItems=()=>{

    const menuItems=[1,2,3,4,5,6,7]
    return(<div>
        
{menuItems.map((each)=>{return <li key={each.toString()}>{each}</li>})}

    </div>)
}

export default NavItems;