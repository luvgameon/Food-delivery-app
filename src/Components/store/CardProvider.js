import React,{useState} from 'react'
import CartContext from './cart-context';

export default function CardProvider(props) {
  const [items, setitems] = useState([])
    const addItemToCartHandler=(item)=>{
      setitems([...items,item])
      console.log(items);
    };
    const removeItemFromCartHandler=(id)=>{};

    const cartContext = {
        items: items,
        totalAmount: 0,
        message:'hi',
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler,
      };
  return (
  <CartContext.Provider value={cartContext}>
  {props.children}
  </CartContext.Provider>
  );
  
}
