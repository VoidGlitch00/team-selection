import React, { useState } from 'react';
import Header from './components/Header/Header';
import Players from './components/Players/Players';
import Sidebar from './components/Sidebar/Sidebar';

function App() {

  const [cart, setCart] = useState([]);
  const addToCartHandler = (player) => {
    const newCart = [...cart, player];
    setCart(newCart);
  }
  const clearSelection = () => {
    setCart([]);
  }


  return (
    <div>
      <Header> </Header>
      <main className="container">
        <div className="row">
          <Players addToCartHandler={addToCartHandler}> </Players>
          <Sidebar cart={cart}> </Sidebar>
          <button onClick={clearSelection} className="btn btn-info">Clear Selection</button>  
        </div>
      </main>

    </div>
  );
}

export default App;