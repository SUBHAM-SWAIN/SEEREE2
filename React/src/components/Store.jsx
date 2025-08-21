import axios from "axios";
import { useState } from "react";

function StoreData(){
    const [formData,setFormData]=useState({
        name:'',
        email:'',
        age:'',
        phone:''
    })
    const handleChange=(event)=>{
        const {name,value}=event.target;
        setFormData({
            ...formData,
            [name]:value
        })
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        axios.post('http://localhost:3000/insertData',formData)
        .then(res=>{
            alert(res.data.message)
            location.reload();
        }).catch(err=>{
            console.log(err);
        })
    }
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} placeholder="Enter Your Name" onChange={handleChange}/>
                <br/>
                <input type="email" name="email" value={formData.email} placeholder="Enter Your Email" onChange={handleChange}/>
                <br/>
                <input type="text" name="age" value={formData.age} placeholder="Enter Your Age" onChange={handleChange}/>
                <br/>
                <input type="text" name="phone" value={formData.phone} placeholder="Enter Your Phone" onChange={handleChange}/>
                <br/>
                <input type="submit" name="btn" value={"Register"} />
            </form>
        </>
    )
}
export default StoreData;