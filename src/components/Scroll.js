import React from 'react';
import './Scroll.css';

const Scroll = (props) => {
    return (
        <div class='border'>
            {props.children}
        </div>
    )
}

export default Scroll;