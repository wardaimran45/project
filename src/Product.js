import React from 'react' ;
import './addtocart.css';

export default function Product(props) {
    const {product, onAdd}= props;
  return (
    <div>
      <img className='small' src={product.image} alt={product.name} > 
      </img>
      <h5>
          {product.name}
      </h5>
      <div>
          Rs {product.price}
      </div>
      <div>
      <button className='cartbtn' onClick={() => onAdd(product)}>Add To Cart</button>
      </div>
    </div>
  )
}
