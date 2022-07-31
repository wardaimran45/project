import React, { Component } from 'react';
import Pret from "./images/Pret.PNG";
import './addtocart.css';


export default function Addtocart(props) {
    return (
        <div>
            <img className='pretpic' src={Pret} >
         </img>

     <div className='headdiv'>
         
         

          <h5 className='shopcart'> Shopping Cart</h5>
          <a className='cart' href="#/cart"> Cart</a> 
     
     
      
     
      </div>
      <p className='barish'>
      'Pehli Baarish' is all about celebrations. With new season comes happiness, togetherness, joy and festivities. Our Eid Edit features exquisite prints and embroideries on lawn shirts paired with 
      flamboyant chiffon & lawn dupattas. This 
      </p >
      <p className='barish2'>collection is everything you need for your Eid wardrobe. Starting from Rs.990</p>
      </div>
    )
      }