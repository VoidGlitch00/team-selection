import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Sidebar = ({cart}) => {
    const total = cart.reduce((prev, curr) => prev + curr.price, 0)
    
    return (
        <aside className="sidebar col-md-4 ps-5">
            <p className="text-center">Selected Team Members ({cart.length})</p>
            <ul className="list-group my-4">
                {
                    cart.map((player)=><li key={player.id} className="list-group-item list-group-item-primary">{player.name} - ${player.price}</li>)
                }

            
            </ul>
            <div className="d-grid">
                <button className="btn btn-info"><FontAwesomeIcon icon={faDollarSign} /> Total Budget - ${total}</button>
            </div>
        </aside>
    );
};

export default Sidebar;