import { ErrorMessage, Field, Form, Formik } from 'formik'
import React, { useState } from 'react'
import * as Yup from 'yup';

function Services() {


  return (
    <>
    
    <Formik  initialValues={{ name: '', email: '', password: '', gender: '' }}
    validationSchema={Yup.object({
      name: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Required'),
      password: Yup.string()
        .min(8, 'Must be 8 characters or more')
        .required('Required'),
      gender: Yup.string().required('Required'),
    })}
    onSubmit={values => {alert(JSON.stringify(values))}}
    >
        <Form>
            <Field type="text" name="name" placeholder="name" />
            <ErrorMessage name="name" component="div" style={{ color: 'red' }} />
            <Field type="text" name="email" placeholder="email" />
            <ErrorMessage name="email" component="div" style={{ color: 'red' }} />
            <Field type="password" name="password" placeholder="password" />
            <ErrorMessage name="password" component="div" style={{ color: 'blue' }} />
            <Field as="select" name="gender" >
                <option value="">select gender</option>
                <option value="male">male</option>
                <option value="female">female</option>
                <option value="other">other</option>
            </Field>
            <ErrorMessage name="gender" component="div" style={{ color: 'red' }} />
            <button type='submit'>submit</button>
        </Form>
    </Formik>
    
    </>
  )
}

export default Services