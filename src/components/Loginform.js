import React, { Component } from 'react';
import {Formik, Form } from 'formik' ;
import {Textfield} from './Textfield';
import '../form.css';
import * as Yup from 'yup';
import Morbagh from "../Morbagh.js";
import Footer from "../Footer.js";
import { Link } from 'react-router-dom';

export const Loginform = () => {
    const validate  = Yup.object({
       

        email: Yup.string()
        .email('Email is invalid')
        .required('Required'),

        password: Yup.string()
        .min(6,'Password must be 6 characters')
        .required('Required'),
 
    })
    return ( 
        <Formik
        initialValues={{
            email: '',
            password: '',
 
        } }
        validationSchema={validate}>
   
          
           {formik => (
               
              <div > 
                  
                  <div>
                  <h4 className='account'>
            ACCOUNT
        </h4>
                      <h5 className='manual' >
                         Sign in manually
                  </h5>
                 
                  
                  {console.log(formik.values)}
                  <Form action="/action_page.php" className='form2'>
                   
                    <Textfield className="xy" label="Email" name="email" type="email" placeholder="Email Address" />
                    <Textfield className="xy" label="Password" name="password" type="password" placeholder="Password" />
                
                    <button className='btn btn-danger' id='reset1' type='submit' > LOGIN  </button>  

   
                   
                  </Form>
              <Link to="/REGISTER">  <a>  <p className='registernow'> Register now</p> </a> </Link>
                  </div>
        <div><Footer/></div>
                
              </div>
           )}
        </Formik>
     );
}
 
