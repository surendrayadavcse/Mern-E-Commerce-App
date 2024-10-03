import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
// import Yup from 'yup'
import * as Yup from 'yup'
function Register() {
    const validationSchema=Yup.object({
        name:Yup.string()
        .required('user name is required')
        .min(2,'user name must have 2 characters'),
        email:Yup.string()
        .email('invalid email format')
        .required('email is required'),
        password:Yup.string()
        .min(8,'min 8 characters required')
        .required('password must be enter')
    })

    function handleSubmit(values){
        console.log(values)

    }
       

  return (
    <>

    <Formik initialValues={{name:"",email:"",password:""}}
    validationSchema={validationSchema}
    onSubmit={handleSubmit}
    
    
    >
    {({isSubmitting})=>(
        <Form>
            <div>
                <Field  name="name" placeholder="enter name" ></Field>
                <ErrorMessage name="name" component='div' style={{color:"red"}}></ErrorMessage>

                </div>
                <div>
                <Field name="email" placeholder="enter email" ></Field>
                <ErrorMessage name="email" component='div' style={{color:"red"}}></ErrorMessage>
                </div>
                <div>
                <Field name="password" placeholder="enter password" ></Field>
                <ErrorMessage name="password"  component='div' style={{color:"red"}}></ErrorMessage>
                </div>
                
                <button type='submit' isSubmitting >submit</button>
           
        </Form>
    )}


    </Formik>
  

    </>
   
  )
}

export default Register




