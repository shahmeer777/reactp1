import React,{useState} from 'react'

function Contact() {

    const [value,setvalue]=useState({
        name :"",
        email :"",
        password :""
    });


    
    const submit=()=>{

        alert(JSON.stringify(value))
    }

    return (
        <>
        <input type="text" value={value.name} onChange={(e)=>setvalue({...value,name:e.target.value})}  placeholder="name" />
        <input type="email" value={value.email} onChange={(e)=>setvalue({...value,email:e.target.value})}  placeholder="email" />
        <input type="password"  value={value.password} onChange={(e)=>setvalue({...value,password:e.target.value})}  placeholder="password" />

        <button onClick={submit}>submit</button>
        
        </>
    )
}

export default Contact