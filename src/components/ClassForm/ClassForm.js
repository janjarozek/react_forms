import React from 'react';

import Button from '../_general/Button';
import Input from '../_general/Input';
import Select from '../_general/Select';

const tip = ["Choose tip value", "5%", "10%", "15%", "20%"];
var totalBill = 0;

export default class ClassForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            tipValue: 5,
            billValue: 0,
            showForm: true,
        };
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({showForm: !this.state.showForm})
    }

    resetBillCalculation = (e) => {
        this.setState({showForm: !this.state.showForm})
    }
    handleInputChange = (e) => {
        this.setState({billValue: e.target.value})
    }
    handleSelectChange = (e) => {
        this.setState({tipValue: e.target.value})
    }

    handleButtonClick = (e) => {
        (this.state.tipValue !== 0 && this.state.billValue > 0)?
        (totalBill = this.state.billValue * (parseInt(this.state.tipValue)/100)):
        (console.log('Give a proper bill value.'));
    }
    render() {
        return(
            <div>
            <p className="header">
                Formularz klasowy
            </p>
                {this.state.showForm && <form onSubmit={this.handleSubmit}>
                    <Input
                        type="number"
                        placeholder="0"
                        handleOnChange={this.handleInputChange}/>
                    <Select
                        id="tip-select"
                        name="tip-select"
                        label="Tip value:"
                        values={tip}
                        handleOnChange={this.handleSelectChange}/>
                    <Button
                        label="Calculate the tip"
                        handleClick={this.handleButtonClick}/>
                </form>}
                {!this.state.showForm && <div>
                    <p className="paragraph">
                        Total bill: {totalBill.toFixed(2)}
                    </p>
                        <Button
                            label="Show form"
                            handleClick={this.resetBillCalculation}/>
                </div>}
            </div>
        );
    };
};