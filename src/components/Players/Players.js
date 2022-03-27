import React , { useEffect, useState } from 'react';
import players from '../../fakeData/fakeData.json';
import Player from '../Player/Player';

const Players = (props) => {
    const [x, y] = useState([]);
    useEffect(()=>{
        y(players);
    },[])
    return (
        <section className="col-md-8 border-end">
            <div className="row row-cols-3 gx-3 gy-3">
                {
                    x.map(player => <Player addToCartHandler={props.addToCartHandler} key={player.id} player={player} />)
                }
            </div>
        </section>
    );
};

export default Players;