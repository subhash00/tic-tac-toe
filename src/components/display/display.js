import React from 'react';
import './display.css';

const display = (props) => {
    return (
        <div className="mainDisplay">
            {
                props.winner ? <p>{props.winner} wins the game</p> : props.draw ? <p>Its a Draw</p> : <p> {props.turn} turn</p>
            }
        </div>
    );
}

export default display;