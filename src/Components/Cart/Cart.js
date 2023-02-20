import { useContext } from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';
import CartContext from '../store/cart-context';
import CartItem from './CartItem';

const Cart = (props) => {
  const Cardctx=useContext(CartContext);
  const addcartItem=(item)=>{};
  const removecartItem=(id)=>{};
  const cartItems = (
    <ul className={classes['cart-items']}>
      { 
     
    
      
      Cardctx.items.map((item) => (
       
      
        <CartItem 
        key={item.id}
        name={item.name}
        amount={item.quantity}
        price={item.price}
        onRemove={addcartItem.bind(null,item.id)}
        onAdd={removecartItem.bind(null,item)}
        /> 
       
      ))}
    </ul>
  );
  let totalamount=0
  Cardctx.items.forEach(item=>{
    totalamount=totalamount+ (Number(item.quantity)*Number(item.price));
   

  })
  const hasItem=Cardctx.items.length>1;


  return (
    <Modal onClose={props.onClose}>
      
      {cartItems}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalamount}</span>
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