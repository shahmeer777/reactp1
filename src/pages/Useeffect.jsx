import React, { useEffect, useState } from 'react'

function Useeffect() {
    // const [value,setvalue]=useState({
    //     val1 :"",
    //     val2 :"",
    // });

    // const perc =()=>{
    //     return  parseInt(value.val1)+ parseInt(value.val2);
    // }
    const [value,setvalue]=useState("")
    const [list,setlist]=useState([])

    const add=()=>{
        setlist([...list,value])
        setvalue("")
        console.log(list)
    }

    useEffect(()=>{

        console.log(list)
    },[list])

  return (
    <>
   { /* <input  type="text" value={value.val1} onChange={(e)=>setvalue({...value,val1:e.target.value})} placeholder="test"  />
    <input  type="text" value={value.val2} onChange={(e)=>setvalue({...value,val2:e.target.value})} placeholder="test"  />
   

    <p>{perc()}</p> */}

<input  type="text" value={value} onChange={(e)=>setvalue(e.target.value)} placeholder="test"  />
  <button onClick={add}>submit</button>

  <ul>
    {list.map((val)=><li>{val}</li>)}
  </ul>

    </>
  )
}

export default Useeffect