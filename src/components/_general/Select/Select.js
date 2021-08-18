import React from 'react';

import '../generalElements.css'

export default function Select({id, name, label, values, handleOnChange}){
    return(
        <div>
            <label className="selectLabel" for={id}>{label}</label>
            <select name={name} id={id} onChange={handleOnChange}>
                {values.map(
                    (item, index) =>
                    (index === 0)?
                    (<option value="" selected disabled hidden>{item}</option>):
                    (<option value={item}>{item}</option>)
                )}
            </select>
        </div>
    );
};