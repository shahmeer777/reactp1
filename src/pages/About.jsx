import React from 'react'
import Form from '../components/Form'

function About() {
  return (
    <>
     <div>About</div>
     <Form check={
      {
    
        email : true,
        password:true
      }
     }/>
   
    </>
   
  )
}

export default About