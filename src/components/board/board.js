import React from 'react';
import './board.css';
import Button from '../button';

const board = (props) => {

    return (
        <div className="mainBoard">
            {props.children}
        </div>
    );
}

export default board;