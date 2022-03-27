import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandPointer } from '@fortawesome/free-solid-svg-icons';

const Player = (props) => {
    const { name, balance, image } = props.player;
    const [selected, setSelection] = useState(false);

    return (
        <div className="col text-center">

            <div className="card border-3">
                <img src={image} alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">${balance}</p>
                    <button disabled={selected} onClick={() => {
                        props.addToCartHandler(props.player)
                        setSelection(true)
                    }} className="btn btn-warning">
                        {selected ? "Selected" : "Select Me   "}
                        <FontAwesomeIcon icon={faHandPointer} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Player;