import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';


const Sidebar = ({ cart, setCart }) => {
    const total = cart.reduce((prev, curr) => prev + curr.balance, 0)
    
    const randomlyOne = () => {
        const one = Math.floor(Math.random() * cart.length);
        return(cart[one].name);
    }

    return (
        <aside className="sidebar col-md-4 ps-5">
            <p className="text-center">Selected Team Members ({cart.length})</p>
            <ul className="list-group my-4">
                {
                    cart.map((player) => <li key={player.id} className="list-group-item list-group-item-primary">{player.name} - ${player.balance}</li>)
                }

            </ul>
            <p>Your Player: {randomlyOne}</p>
            <div className="d-grid">
                <button className="btn btn-info"><FontAwesomeIcon icon={faDollarSign} /> Total Budget - ${total}</button> 
                <br></br>
                <button onClick={randomlyOne} className="btn btn-info">Randomly Select One</button>
                <br></br>
                {/* <button onClick={clearSelection} className="btn btn-info">Clear Selection</button> */}
            </div>
        </aside>
    );
};

export default Sidebar;