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


  return (
    <div>
      <Header> </Header>
      <main className="container">
        <div className="row">
          <Players addToCartHandler={addToCartHandler}> </Players>
          <Sidebar cart={cart} setCart={setCart} > </Sidebar>
          <div>
            <h3>How react works?
            </h3>
            <p>The original UI is copied by React and then saved as virtualDom. When changes to webpages occur, instead of changing the whole DOM line by line, mirror the existing DOM and build a new Virtual Dom. Changes, on the other hand, are tracked by it, which replaces, adds, removes, overwrites, or adds any new functionality to the DOM. After that, re-render the DOM with the modifications made. After then, a new UI is returned.</p>
            <h3>What is the difference between Props & states?
            </h3>
            <p>Props, unlike states, are not modifiable. States can be supplied as an object in this case. States are not component properties; they exist outside of the components and are used to alter them, whereas props are contained within the component function's argument. It's not possible to change the props. Although props are read-only, useState allows the state to be modified. Properties are handed down from the parent, and a state is formed in the individual component.</p>
          </div>
        </div>
      </main>

    </div>
  );
}

export default App;