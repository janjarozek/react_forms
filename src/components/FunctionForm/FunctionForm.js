import React, { useState } from 'react';

import useInput from '../hooks/useInput';

import Button from '../_general/Button';
import Input from '../_general/Input';
import Select from '../_general/Select';


const tip = ["Choose tip value", "5%", "10%", "15%", "20%"];
var totalBill = 0;

export default function FunctionForm(){
    const [tipValue, handleSelectChange] = useInput('');
    const [billValue, handleInputChange] = useInput('');
    const [showForm, changeShowForm] = useState(true);

    const handleSubmit = (e) => {
        e.preventDefault();
        changeShowForm(!showForm);
    };

    const resetBillCalculation = (e) => {
        changeShowForm(!showForm);
    };

    const handleButtonClick = (e) => {
        (tipValue !== 0 && billValue > 0)?
        (totalBill = billValue * (parseInt(tipValue)/100)):
        (console.log('Give a proper bill value.'));
    };

    return(
        <div>
            <p className="header">
                Formularz funkcyjny
            </p>
            {showForm && <form onSubmit={handleSubmit}>
                <Input
                    type="number"
                    placeholder="0"
                    handleOnChange={handleInputChange}/>
                <Select
                    id="tip-select"
                    name="tip-select"
                    label="Tip value:"
                    values={tip}
                    handleOnChange={handleSelectChange}/>
                <Button
                    label="Calculate the tip"
                    handleClick={handleButtonClick}/>
            </form>}
            {!showForm && <div>
                <p className="paragraph">
                    Total bill: {totalBill.toFixed(2)}
                </p>
                    <Button
                        label="Show form"
                        handleClick={resetBillCalculation}/>
            </div>}
        </div>
    );
};