import React from 'react';

import '../generalElements.css'

export default function Button({label, handleClick}){
    return(
        <button onClick={handleClick}>
            {label}
        </button>
    );
};