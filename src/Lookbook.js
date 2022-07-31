import React, { Component } from 'react';
import {Carousel} from 'react-bootstrap';
import Morbagh from './Morbagh';
import './lookbook.css';
import Footer from './Footer';
class Lookbook extends Component {
    state = { 
        logo1: require("./images2/lookbook.PNG"),
        car1: require("./images2/car1.jpg"),
        car2: require("./images2/car2.jpg"),
        car3: require("./images2/car3.jpg"),
        car4: require("./images2/car4.jpg"),
        car5: require("./images2/car5.jpg"),
        car6: require("./images2/car6.jpg"),
        car7: require("./images2/car7.jpg"),
        car8: require("./images2/car8.jpg"),
        car9: require("./images2/car9.jpg"),
        car10: require("./images2/car10.jpg"),
        car11: require("./images2/car11.jpg"),
        car12: require("./images2/car12.jpg"),
        car13: require("./images2/car13.jpg"),
        car14: require("./images2/car14.jpg"),
        car15: require("./images2/car15.jpg"),
        car16: require("./images2/car16.jpg"),
        car17: require("./images2/car17.jpg"),
        car18: require("./images2/car18.jpg"),
        car19: require("./images2/car19.jpg"),
        car20: require("./images2/car20.jpg"),
        
        

        
     } 
    render() { 
        return (
            <div>
                
                <h3 className='lookhead'>Look Book</h3>
                <img className='logo23' src={this.state.logo1}></img>
                <h5 className='unstich'>UNSTICHED SS''22 VOL II</h5>
                <div className='lookbook'>
            <div id="carousel" className="carousel slide" data-ride="carousel" >

<Carousel>
  <Carousel.Item>
    <img
      className="d-block w-10"
      
      
      src={this.state.car1}
      style={{width: "1300px", height: "800px"}}
      alt="First slide"
    />
    
  </Carousel.Item >
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "800px"}}
      src={this.state.car2}
      alt="Second slide"
    />

    
  </Carousel.Item>
 
  <Carousel.Item>
    <img
      className="d-block w-10"
      style={{width: "1300px", height: "800px"}}
      src={this.state.car3}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "800px"}}
      src={this.state.car4}
      alt="Second slide"
    />

    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "800px"}}
      src={this.state.car5}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "1100px"}}
      src={this.state.car6}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "1100px"}}
      src={this.state.car7}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "1100px"}}
      src={this.state.car8}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "1100px"}}
      src={this.state.car9}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "1100px"}}
      src={this.state.car10}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "1100px"}}
      src={this.state.car11}
      alt="Second slide"
    />

    
  </Carousel.Item>

  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "1100px"}}
      src={this.state.car12}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "1100px"}}
      src={this.state.car13}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "1100px"}}
      src={this.state.car14}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "1100px"}}
      src={this.state.car15}
      alt="Second slide"
    />

    
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-10"
    style={{width: "1300px", height: "1100px"}}
      src={this.state.car16}
      alt="Second slide"
    />

    
  </Carousel.Item>
 </Carousel>

 </div>
            </div>
           
            </div>
        );
    }
}
 
export default Lookbook;