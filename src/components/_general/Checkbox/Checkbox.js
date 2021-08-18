import React from 'react';

import '../generalElements.css'

export default function Checkbox({label, handleOnChange}){
    return(
        <div>
            <input className="checkbox"
                    type="checkbox"
                    id={label}
                    name={label}
                    onChange={handleOnChange} />
            <label className="checkboxLabel" for={label}>{label}</label>
        </div>
    );
};