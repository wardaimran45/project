import React, { Component } from 'react';
import './morbagh.css'
class Footer extends Component {
    state = { 
        pic11:require("./logo.PNG")
     } 
    render() { 
        return (
<div>
            <div className='footer' style={{backgroundColor:"#f6edeb", width:"1365px", height:"300px"}}>
                <div className='row'>
                    <div className='col-md-4'>
                      <p className='paraf'>
                          Information
                      </p>
                      <p className='a1'> ABOUT US</p>
                      <p className='a2'> CONTACT US</p>
                      <p className='a3'> STORE LOCATOR</p>
                      <p className='a4'> BLOG</p>
                      
                    </div>
                    <div className='col-md-4'>
                       <p className='paraf1'>Help</p>
                       <p className='b1'> PRIVACY POLICY</p>
                      <p className='b2'> FAQS</p>
                      <p className='b3'> EXCHANGE POLICY</p>
                       
                     
                    </div>
                    <div className='col-md-4'>
                      <p className='paraf2'> Follow Us</p>
                      <p className='c1'> FACEBOOK</p>
                      <p className='c2'> INSTAGRAM</p>
                      
                    </div>
                </div>
                 
            </div>
            </div>
        );
    }
}
 
export default Footer;