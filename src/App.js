import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

function Display(props) {
  return (
    <div className="App">
      <p>{props.value}</p>
    </div>
  );
}

function Button(props) {
  return (
    <button onClick={props.aoClicar}>{props.text}</button>
  );
}

function getDisplayNumber(number) {
  const stringNumber = number.toString();
  const integerDigits = parseFloat(stringNumber.split('.')[0]);
  const decimalDigits = stringNumber.split('.')[1];
  let integerDisplay;
  if(isNaN(integerDigits)) {
    integerDisplay = '';
  } else {
    integerDisplay = integerDigits.toLocaleString('en', {maximumFractionDigits: 0});
  }
  if(decimalDigits != null) {
    return `${integerDisplay}.${decimalDigits}`;
  } else {
    return integerDisplay;
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentOperand: "",
      lista: [1, 2, 3, 4]
    };
    this.addNumber = this.addNumber.bind(this);
    console.log(
      getDisplayNumber('1231213')
    );
  }

  addNumber(number) {
    this.setState(state => {
      return {        
        currentOperand: state.currentOperand + number,
      };
    });
  }

  render() {
    return (
      <div className="App">
        <Display value={this.state.currentOperand} />
        {/* <Display value="2"/> */}
        <Button text="0" aoClicar={() => this.addNumber("0")} />
        <Button text="1" aoClicar={() => this.addNumber("1")} />
        <Button text="2" aoClicar={() => this.addNumber("2")} />
        <Button text="3" aoClicar={() => this.addNumber("3")} />
        <Button text="4" aoClicar={() => this.addNumber("4")} />
        <Button text="5" aoClicar={() => this.addNumber("5")} />
        <Button text="6" aoClicar={() => this.addNumber("6")} />
        <Button text="7" aoClicar={() => this.addNumber("7")} />
        <Button text="8" aoClicar={() => this.addNumber("8")} />
        <Button text="9" aoClicar={() => this.addNumber("9")} />
        <Button text="," aoClicar={() => this.addNumber(",")} />
        <Button text="+" />
        <Button text="-" />
        <Button text="/" />
        <Button text="*" />
        {
          this.state.lista.map(
            (val) => <h1>{val}</h1>
          )
        }
        {/* <Keypad/> */}
        {/* <OperationButtons/> */}
        {/* <EqualButton/> */}
      </div>
    );
  }
}

export default App;