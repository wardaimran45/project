import React, { Component } from 'react';
import './addtocart.css';
import Product from './Product';
export default function Main(props) {
    const {products, onAdd} = props;
    return (
        
     <div>
         <div className='prodiv'>
         <h5 className='prod'>Products</h5>
         </div>
         
         <div className='carddisplay' >
             <div className='mapclass'>
             {products.map((product) => (
          <Product key={product.id} product={product} onAdd={onAdd} ></Product>
        ))}
             </div>
        
         </div>
        
     </div>
    );
  }