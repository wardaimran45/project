import React, { Component } from 'react';
import {Formik, Form } from 'formik' ;
import {Textfield} from './Textfield';
import './Payment.css';
import * as Yup from 'yup';
import logo01 from './morbaghlogo.PNG';
import Basket from '../Basket';
import { Link } from 'react-router-dom';


export const Paymentform = () => {
    const validate  = Yup.object({
        firstName: Yup.string()
        .max(15, 'Must be 15 characters or less')
        .required('Required'),

        lastName: Yup.string()
        .max(20, 'Must be 20 characters or less')
        .required('Required'),

        email: Yup.string()
        .email('Email is invalid')
        .required('Required'),

        address: Yup.string()
        .required('Required'),

        mobileNo: Yup.string()
        .required('Required'),

    })
    return ( 
        <Formik
        initialValues={{
            firstName:'' ,
            lastName: '',
            email: '',
            address: '',
            mobileNo: '',
          
        } }
        validationSchema={validate}>
         
           {formik => (
               
              <div >
                 
              <div >
                  
                  <div >
                  <img src={logo01} className='image01'>
                 </img>

                 <h5 className='contactinfo'>
                     Contact Information
                 </h5>

                  {console.log(formik.values)}
                  <Form action="/action_page.php" className='form03'>
                  <Textfield placeholder='Email'  name="email" type="email" />
                  <p className='please'>Please note all correspondence will be done via email so please enter your correct email ID</p>
                  <p className='shippingadd'>
                     Shipping address
                 </p>
                 <input placeholder='Country / Region : Pakistan' className='country' ></input>
                    <Textfield placeholder='First Name' name="firstName" type="text" />
                    <Textfield placeholder='Last Name' name="lastName" type="text" />
                    <Textfield placeholder='Address' name="address" type="text" />

                    <div className='custom-select'>
  <select className='city'>
    <option value="0">City</option>
    <option value="1">LAHORE</option>
    <option value="2">KARACHI</option>
    <option value="3">ISLAMABAD</option>
    <option value="4">RAWALPINDI</option>
    <option value="5">FAISALBAD</option>
    <option value="6">MULTAN</option>
    <option value="7">PESHAWAR</option>
    <option value="8">ABBOTABAD</option>
  </select>
</div>
                    <Textfield placeholder='Mobile Phone' name="mobileNo" type="text" />
                   

                       <input type="checkbox" id="vehicle1" name="vehicle1" value="Bike"></input>
                       <label for="vehicle1"className='save'>  Save this information for next time</label>
                       

                  </Form>
                 <button className='btn btn-dark mt-3' type='submit' id='shipbtn'> Continue to shipping  </button> 
                  </div>
                 
               
                  
              </div >
                 
                   
                     
              </div>
           )}
        </Formik>
     );
}
 
