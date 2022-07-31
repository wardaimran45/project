import React, { Component } from 'react';
import './morbagh.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass, faShoppingBag, faUser} from '@fortawesome/free-solid-svg-icons';
import companyLogo from './logo.PNG'
import slide1 from './slide 1.PNG'
import { Link } from 'react-router-dom';


class Morbagh extends Component {
    state = { 
      pic1: require("./logo.PNG"),
      para1:  'UAN # +92-42-111-128-731 (MON-SAT : 9 AM TO 9 PM)' ,
      para2: 'FREE SHIPPING WITHIN PAKISTAN ABOVE PKR 2000',
      para3: ' customercare@morbagh.pk',
     } 
    render() { 
        return (
            <div>
                <div className='div1'> 
               
                    <p className='para1'>
                   {this.state.para1}
                    </p>
                
                    <p className='para2'>
                    {this.state.para2}
                    </p>
                
               
                    <p className='para3'>
                    {this.state.para3}
                    </p>
                

                </div>
               
              
                   <div className='row' id='div2'>
                    <div className='col-md-4'>
                      <img id='logo' src={this.state.pic1} ></img>
                    </div>
                    <div className='col-md-6' id='navbar'>
                      <nav>
                    <ul>
        {/* <li className='list2'> HOME </li> */}
       <Link id='link' to="/"> <a className="list2" > HOME </a> </Link>
       
      <Link id='link' to="/PRET"><a  className='list2'>PRET</a> </Link> 
      <Link id='link' to="/LOOKBOOK"> <a  className='list2'>LOOK BOOK</a> </Link>
     <Link id='link' to="/REVIEW"> <a  className='list2'>REVIEW</a> </Link> 
      <Link id='link' to="/LOGIN"><a className='list2'>LOGIN
      
        </a> </Link>
      <Link id='link' to="/REGISTER">
       <a className='list2'>REGISTER
      
        </a></Link>
       
       

      
      
       
        
    </ul>
    </nav>
                    </div>
                    <div className='col-md-2'>
                    <a className="nav-link" href="#" id='font'><FontAwesomeIcon icon={faMagnifyingGlass} ></FontAwesomeIcon></a>

                    <div className='line'> </div>
                    <p id='order'>Track order</p>
                  <Link to='/LOGIN'>  <a className="nav-link" href="#" id='font2'><FontAwesomeIcon icon={faUser} ></FontAwesomeIcon></a> </Link>
                    <a className="nav-link" href="#" id='font3'><FontAwesomeIcon icon={faShoppingBag} ></FontAwesomeIcon></a>
                    </div>
                   

                   

            </div> 
            </div>
        );
    }
   
}
 
export default Morbagh;