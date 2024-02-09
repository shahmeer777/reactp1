import React,{useState} from 'react'

function Index() {

  const [value,setvalue] = useState("");
  const submit = () => {
    alert(value)
  }

  return (
    <>
    <input type="text" value={value} onChange={(e)=>setvalue(e.target.value)} placeholder="test" />
    <button onClick={submit}>test</button>
    </>
  )
}

export default Index