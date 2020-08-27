import React from 'react';
import './Display.css';

function Display(props) {
    return (
        <div className="display">
            {props.label}
        </div>
    );
}

export default Display;