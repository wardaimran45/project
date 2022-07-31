import React, { Component } from 'react';
import loginpic from './loginform.PNG';
import './form.css';
import {Signup} from './components/Signup';

class Form extends Component {
    state = { 
        
     } 
    render() { 
        return (
           <div >
<div className='row'>
    <div className='col-md-7'>
    <Signup/>
    </div>
    <div className='col-md-5 my-auto' >
           <img className='img-fluid ' id='img1' src={loginpic} />

    </div>

</div>
           </div>
        );
    }
}
 
export default Form;