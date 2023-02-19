import { Fragment, useState } from 'react';
import Header from "./Components/Layout/Header";
import Meals from "./Components/Meals/Meals";
import React from 'react';
import Cart from './Components/Cart/Cart';


function App() {
  const [ShowCart, setShowCart] = useState(false);

const ShowCartHandler=()=>{
  setShowCart(true);
}

const hideCartHandler=()=>{
  setShowCart(false);
} 


  return (
    <Fragment>
      {ShowCart && <Cart onClose={hideCartHandler}/>}
      <Header onShowCart={ShowCartHandler}/>
      <main>
        <Meals />
      </main>
    </Fragment>
  );
}

export default App;
