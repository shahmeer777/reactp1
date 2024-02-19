import React from 'react'
import ContactForm from '../components/ContactForm'
import CustomForm from '../components/CustomForm'


function Faqs() {
  return (
    <>
    {/* <ContactForm check={
        {
            name:true,
            email:true,
            message:true,
            number:true
        }
    }
    /> */}

    <div className='w-full justify-center flex'>    
      
      <CustomForm>
        <h1>contact form</h1>
        <input type='text'/>
        <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>submit</button>
    </CustomForm>

    </div>




    
    <div className='w-full justify-center flex'>    
      
      <CustomForm>
        <h1>faq form</h1>
        
    
    </CustomForm>

    </div>


    </>
  )
}

export default Faqs