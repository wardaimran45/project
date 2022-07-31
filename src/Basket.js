import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Paymentform } from './components/Paymentform';
export default function Basket(props) {
    const {cartItems, onAdd, onRemove} = props;
    const itemsPrice = cartItems.reduce((a, c) => a + c.qty * c.price, 0);
  const taxPrice = itemsPrice * 0.16;
  const shippingPrice = itemsPrice > 2000 ? 0 : 20;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;
    return (
      <div>
          <div className='row'>
          {/* <div className='col-md-7'>
                    <Paymentform/>
              </div> */}
              <div className='col-md-5' id='cartback'>
                 <h3 className='addtocart'>Add to Cart</h3> 
           <div>  {cartItems.length === 0 && <div>Cart is empty</div>} </div> 
           {cartItems.map((item) => (
               <div key={item.id} className="row">

               <div className='col-4'>  {item.name} </div>
                <div className='col-3'> 
                    <button onClick={() => onAdd(item)} className="add"> +  </button>
                    <button onClick={() => onRemove(item)} className="remove">  - </button>

          </div>
          <div className="col-4 text-right">
              {item.qty} x Rs{item.price.toFixed(2)}
            </div>
              
              </div>
          ))}
          {cartItems.length !== 0 && (
          <>
            <hr></hr>
            <div className="row">
              <div className="col-2">Items Price</div>
              <div className="col-1 text-right">Rs{itemsPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Tax Price</div>
              <div className="col-1 text-right">Rs{taxPrice.toFixed(2)}</div>
            </div>
            <div className="row">
              <div className="col-2">Shipping Price</div>
              <div className="col-1 text-right">
                Rs{shippingPrice.toFixed(2)}
              </div>
            </div>

            <div className="row">
              <div className="col-2">
                <strong>Total Price</strong>
              </div>
              <div className="col-1 text-right">
                <strong>Rs{totalPrice.toFixed(2)}</strong>
              </div>
            </div>
            <hr />
            <div className="row">
             <Link to="/CHECKOUT"> <button className='checkout' onClick={() => alert('Implement Checkout!')}>
                Checkout
              </button> </Link>
            </div>
          </>
        )}
          
            </div>
            
          </div>

      </div>
    );
  }