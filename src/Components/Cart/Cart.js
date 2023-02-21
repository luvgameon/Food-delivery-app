import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const Cardctx=useContext(CartContext);
  const cartItemRemoveHandler = (id) => {
    Cardctx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    Cardctx.addItem({...item, quantity: 1});
  };
  const cartItems = (
    <ul className={classes['cart-items']}>
      { 
     
    
      
      Cardctx.items.map((item) => (
  
      
        <CartItem 
        key={item.id}
        name={item.name}
        amount={item.quantity}
        price={item.price}
        onRemove={cartItemRemoveHandler.bind(null,item.id)}
        onAdd={cartItemAddHandler.bind(null,item)}
        /> 
       
      ))}
    </ul>
  );
  let totalamount=0
  Cardctx.items.forEach(item=>{
    totalamount=totalamount+ (item.quantity)*(item.price);
   

  })
  const hasItem=Cardctx.items.length>1;


  return (
    <Modal onClose={props.onClose}>
      
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount.toFixed(2)}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>
          Close
        </button>
        {hasItem && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;