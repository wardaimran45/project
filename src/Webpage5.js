import React, { Component } from 'react';
import {Emailform} from "./components/Emailform" ;
class Webpage5 extends Component {
    state = { 
        pic50: require("./girl.PNG")
     } 
    render() { 
        return (
            <div>
                <div className='row' id='div50'>
                    <div className='col-md-5'>
                    <img className='girl' src={this.state.pic50} >
                  </img>
                    </div>
                    <div className='col-md-7' style={{backgroundColor:"#f6edeb"}}>
                               <p className='be'>BE THE FIRST ONE TO KNOW</p>
                             <h4 className='get'> GET THE LATEST TRENDS FIRST
                             </h4>
                             <p className='get2'>
                                 Get all the latest information on sales, discounts and weekly product launches. Sign up for newsletter today.
                             </p>
                             
                             <Emailform/>

                             <button id='submitbtn' className='btn btn-dark mt-3' type='submit' style={{backgroundColor:"#f6edeb" }}> Submit  </button>
                             <p className='be2'>BE A PART OF MORBAGH FAMILY</p>
                    </div>


                </div>
            </div>
        );
    }
}
 
export default Webpage5;