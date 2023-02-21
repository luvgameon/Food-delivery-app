import React,{useContext}from 'react'
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../store/cart-context';

export default function MealItemForm(props) {
  const cardctx=useContext(CartContext);
  const addItemToCart=(event)=>{
    event.preventDefault();
    const quantity=document.getElementById('amount_' + props.id).value;
    cardctx.addItem({...props.item,quantity:quantity});
   

  }

  return (
    <>
    
    <form className={classes.form}>
      
     <Input label="Quantity" input={{
       id: 'amount_' + props.id,
      type:'number',
      min:'1',
      max:'5',
      step:'1',
      defaultValue:'1'
      
     }}/>
        <div>
        <button className={classes.button} onClick={addItemToCart}>+Add</button>
        </div>
    </form>
    </>
  )
}
