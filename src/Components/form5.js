import React from "react";
import { useState } from "react";

const Multiple=()=>{
    const[formData,setFormData]=useState({name:"",email:""})
    
    const handleChange=(e)=>{
        console.log('e',e.target.value);
        const{name,value}=e.target;
        setFormData((prevFormData)=> ({...prevFormData,[name]:value}))

    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(`name:${formData.name}, email:${formData.email}`)
    }
    
    return(<div>
        <form onSubmit={handleSubmit}>
<input type="text" name="name" value={formData.name} onChange={handleChange}/>
<input type="email" name="email" value={formData.email} onChange={handleChange}/>
<button type="submit">submit</button>
</form>

    </div>)
}

export default Multiple;