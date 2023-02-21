import React, { useState } from "react";
import CartContext from "./cart-context";

export default function CardProvider(props) {
  const [items, setitems] = useState([]);
  const addItemToCartHandler = (item) => {
    let temp = [...items];
    let itemidx = temp.findIndex((i) => i.id === item.id);
    if (itemidx === -1) {
      temp = [...temp, item];
    } else {
      temp[itemidx].quantity = Number(temp[itemidx].quantity) + 1;
    }

    setitems([...temp]);
  };
  const removeItemFromCartHandler = (id) => {
    let temp = [...items];
    let itemidx = temp.findIndex((i) => i.id === id);
    if(temp[itemidx].quantity>1){

    temp[itemidx].quantity = Number(temp[itemidx].quantity) - 1;
    }
    else{
      temp=temp.filter((i) => i.id !== id);
      
    }
    setitems([...temp]);
    
  };

  const cartContext = {
    items: items,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}
