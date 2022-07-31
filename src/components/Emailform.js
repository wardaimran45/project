import React, { Component } from 'react';
import {Formik, Form } from 'formik' ;
import {Textfield} from './Textfield';
// import '../form.css';

import * as Yup from 'yup';

export const Emailform = () => {
    const validate  = Yup.object({
       

        email: Yup.string()
        .email('Email is invalid')
        .required('Required'),

        
    })
    return ( 
        <Formik
        initialValues={{
            email: '',
           
        } }
        validationSchema={validate}>
         
            
          
           {formik => (
              <div>
                 
                  {console.log(formik.values)}
                  <Form action="/action_page.php">
                   
                     <Textfield className='text' name="email" type="email" placeholder="Enter Your Email Address"  /> 
                    
                    
                  
                      
                        

                     {/* <button className='btn btn-dark mt-3' type='submit'> Submit  </button> */}
                   

                    
  
          
            
           
          
                  </Form>
              </div>
           )}
        </Formik>
     );
}
 
