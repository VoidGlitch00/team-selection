import React, { useState } from 'react';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  
  const [cart, setCart] = useState([]);
  const addToCartHandler = (player) => {
      const newCart = [...cart ,player];
      setCart(newCart)
  }

  return (
    <div>
      <Header> </Header>
      <main className="container">
        <div className="row">
            <Players addToCartHandler={addToCartHandler}> </Players>
            <Sidebar cart={cart}> </Sidebar>
        </div>
      </main>
      
    </div>
  );
}

export default App;