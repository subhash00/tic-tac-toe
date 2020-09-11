import React from 'react';
import './button.css';

const button = (props) => {
    return (
        <div>
            <button key={props.key} onClick={e => props.handleClick(e.target.key)}>{props.value}</button>
        </div>
    );
}

export default button;