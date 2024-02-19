import React from 'react'
import { Formik,Form as Frms,Field } from 'formik'

function ContactForm({check}) {
  return (
    <>
    <div className='p-5'>
    <h1 className='text-3xl font-bold underline'>ContactForm</h1>
   <Formik onSubmit={values => {alert(JSON.stringify(values))}} initialValues={
        { name:"",email:"",number:"",message:""}
    }> 
    
    <Frms className='mt-2' >
        {check.name && (
            <div className='mb-3'>
                <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="name" placeholder="Enter name"/>

            </div>
              
        )}
        {
            check.email && (
                <div className='mb-3'>
                <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="email" placeholder="Enter email"/>
                </div>
            )
        }
        {
            check.number && (
                <div className='mb-3'>
                <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" type="text" name="number" placeholder="Enter number"/>
            </div>
            )

        }
        {
            check.message && (
                <div className='mb-3'>
                <Field className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" as="textarea" name="message" placeholder="Enter message"/>
                </div>
            )
        }
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' type='submit'>submit</button>
    </Frms>
    
    </Formik> 
    </div>
 

    
    </>
  )
}

export default ContactForm