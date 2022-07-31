import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Smenu extends Component {
    state = {  } 
    render() { 
        return (
            <div>
                <div className='row' id='div2'>
                   
                   <div className='col-md-4'>
                   <nav>
                   <ul>
     
      
     <Link id='link' to="/Hardwareproducts"><a  className='list2'>Hardwareproducts</a> </Link> 
     <Link id='link' to="/Softwareproducts"> <a  className='list2'>Softwareproducts</a> </Link>
     <Link id='link' to="/Accessories"><a  className='list2'>Accessories</a> </Link> 
   
    
  
   </ul>
   </nav>
                   </div>
                   <div className='col-md-6' id='navbar'>
                   <nav>
                    <ul>
      
       
      <Link id='link' to="/Products"><a  className='list2'>Products</a> </Link> 
      <Link id='link' to="/Services"> <a  className='list2'>Services</a> </Link>
     
   
    </ul>
    </nav>
                   </div>
                  
                  

       
           </div>  
            <div className='row'>
                           <div className='col-md-3'>

                           </div>
                           <div className='col-md-7'>
                                 <p>I am a software products section</p>
                           </div>
           </div> 
            </div>
        );
    }
}
 
export default Smenu;