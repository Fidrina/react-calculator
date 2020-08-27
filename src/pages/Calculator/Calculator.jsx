import React, { Component } from 'react';
import './Calculator.css';

import Button from './../../components/Button/Button.jsx';
import Display from './../../components/Display/Display.jsx';

import CalculatorController from '../../CalculatorController.js';

const InitialState = {
    display: ''
};

class Calculator extends Component {
    constructor(props) {
        super(props);

        this.state = InitialState;

        this.clearMemory = this.clearMemory.bind(this);
        this.setOperation = this.setOperation.bind(this);
        this.addDigit = this.addDigit.bind(this);
    }

    clearMemory() {
        this.setState(InitialState);
    }

    setOperation(op) {
        if (op === '=') {
            this.setState({ display: (new CalculatorController()).run(this.state.display) });
        } else {
            this.setState({ display: this.state.display + op });
        }
    }

    addDigit(n) {
        this.setState({ display: this.state.display + n });
    }

    render() {
        return (
            <div className="calculator">
                <Display label={this.state.display} />
                <Button label="AC" click={() => this.clearMemory()} className="button triple" />
                <Button label="/" click={this.setOperation} className="button operation" />
                <Button label="7" click={this.addDigit} className="button" />
                <Button label="8" click={this.addDigit} className="button" />
                <Button label="9" click={this.addDigit} className="button" />
                <Button label="*" click={this.setOperation} className="button operation" />
                <Button label="4" click={this.addDigit} className="button" />
                <Button label="5" click={this.addDigit} className="button" />
                <Button label="6" click={this.addDigit} className="button" />
                <Button label="-" click={this.setOperation} className="button operation" />
                <Button label="1" click={this.addDigit} className="button" />
                <Button label="2" click={this.addDigit} className="button" />
                <Button label="3" click={this.addDigit} className="button" />
                <Button label="+" click={this.setOperation} className="button operation" />
                <Button label="0" click={this.addDigit} className="button double" />
                <Button label="." click={this.addDigit} className="button" />
                <Button label="=" click={this.setOperation} className="button operation" />
            </div>
        );
    }
}

export default Calculator;