import React , { useEffect, useState } from 'react';
import Player from '../Player/Player';

const Players = (props) => {
    const [card, setCard] = useState([]);
    useEffect(()=>{
        fetch('fakeData.json')
        .then( res => res.json())
        .then(data => setCard(data))
    }, [])
    return (
        <section className="col-md-8 border-end">
            <div className="row row-cols-3 gx-3 gy-3">
                {
                    card.map(player => <Player addToCartHandler={props.addToCartHandler} key={player.id} player={player} />)
                }
            </div>
        </section>
    );
};

export default Players;