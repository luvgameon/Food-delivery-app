import React from 'react'
import classes from './Header.module.css';
import Mealsimage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';


export default function Header(props) {
  return (
    <>
    <header className={classes.header}>
   <h1>{props.title}</h1>
<HeaderCartButton/>
    </header>
    <div className={classes['main-image']}>
        <img src={Mealsimage} alt="the food"></img>
    </div>

   
    </>
  )
}
