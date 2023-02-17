import React from 'react'
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';

export default function MealItemForm() {
  return (
    <>
    
    <form className={classes.form}>
     <Input label="Quantity" input={{
      id:'quantity',
      type:'number',
      min:'1',
      max:'5',
      step:'1',
      defaultValue:'1'
      
     }}/>
        <div>
        <button className={classes.button}>+Add</button>
        </div>
    </form>
    </>
  )
}