import Addtocart from "./Addtocart";
import Main from "./Main";
import Basket from "./Basket";
import Morbagh from "./Morbagh";
import Data from "./Data";
import { useState } from 'react';


function Page4layout(){
    const {products} =Data;
    const [cartItems, setCartItems] = useState([]);
    const onAdd = (product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist) {
          setCartItems(
            cartItems.map((x) => 
            x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
            )
          );
        } else {
          setCartItems([...cartItems, { ...product, qty: 1 }]);
        }
      };
      const onRemove =(product) => {
        const exist = cartItems.find((x) => x.id === product.id);
        if (exist.qty === 1) {
          setCartItems(cartItems.filter((x) => x.id !== product.id));
        } else {
          setCartItems(
            cartItems.map((x) =>
              x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
            )
          );
        }
      };
    return(
        <div>
            <Morbagh/>
            <Addtocart/>
             <Main onAdd={onAdd} products={products}>

             </Main>
             <Basket onAdd={onAdd} onRemove={onRemove} cartItems={cartItems}>
                 </Basket>  

        </div>
    )
}
export default Page4layout;