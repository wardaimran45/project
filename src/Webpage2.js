import React, { Component } from 'react';
import './morbagh.css'
class Webpage2 extends Component {
    state = { 
        pic2: require("./mainpic.PNG")
     } 
    render() { 
        return (
            <div className='row'>
                <div className='col-md-12' >
                  <img id='page2' src={this.state.pic2} >
                  </img>
                </div>
            </div>
        );
    }
}
 
export default Webpage2;