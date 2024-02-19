import { Formik,Form as Frm, Field } from 'formik'
import React from 'react'

function Form({ check }) {
  return (
    <>
    <div>Form</div>
    <Formik initialValues={
        { name:"",email:"",password:""}
    }>
        <Frm>
            {check.name && (
                <Field type="text" name="name" placeholder="Enter name"/>
            )}
              {check.email && (
                <Field type="text" name="email" placeholder="Enter email"/>
            )}
              {check.password && (
                <Field type="text" name="password" placeholder="Enter password"/>
            )}
            
           
            
        </Frm>
    </Formik>
    </>
  )
}

export default Form