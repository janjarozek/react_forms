import React from 'react';

import '../generalElements.css'

export default function Textarea({placeholder, handleOnChange}){
    return(
        <textarea
            placeholder={placeholder}
            onChange={handleOnChange}>
        </textarea>
    );
};