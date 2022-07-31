import React, { Component } from 'react';
import './morbagh.css'
class Webpage3 extends Component {
    state = { 
        pic7: require("./cloth1.PNG"),
        pic8: require("./cloth2.PNG"),
        pic9: require("./cloth3.PNG"),
        pic10: require("./cloth4.PNG"),

     } 
    render() { 
        return (
            <div className='webpg3'>
                <div className='row'>
                    <div className='col-md-4' >
                    <img id='cloth1' src={this.state.pic7} ></img>
                      
                    </div>
                     <div className='col-md-4'>
                     <img id='cloth2' src={this.state.pic9} ></img>
                      <div className='row'>
                          <div className='col-md-12'>
                          <img id='cloth3' src={this.state.pic8} ></img>
                          </div>

                      </div>
                    </div>
<div className='col-md-4'>
<img id='cloth4' src={this.state.pic10} ></img>
</div> 

                </div>
            </div>
        );
    }
}
 
export default Webpage3;