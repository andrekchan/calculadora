import React, {Component} from 'react';
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

function ButtonEqual(props) {
  return (
    <button class="Equal" onClick={props.aoClicar}>{props.text}</button>
  );
}

function getDisplayNumber(number) {
  if (isNaN(number)){
    return "Ops, ocorreu um erro. Por favor, apertar C"
  }
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
      previousOperand: "",
      operation: "",
      memo:[],
    };
    this.addNumber = this.addNumber.bind(this);
    this.clear = this.clear.bind(this);
    this.addOperation = this.addOperation.bind(this);
  }

  addNumber(number) {
    this.setState(state => {
      return {
        currentOperand: state.currentOperand + number,
      };
    });
  }

  addOperation (Operacao) {
    this.setState(state => {
        if (state.operation !== ""){
          this.computar()
        return{
          previousOperand: state.currentOperand + Operacao,
          currentOperand: '',
          operation: Operacao,
        }
      }
        else {return{
        previousOperand: state.currentOperand + Operacao,
        currentOperand: '',
        operation: Operacao,
      }}
    });
  }

  computar () {
    this.setState(state => {
      let computacao = ""
      const prev = parseFloat(state.previousOperand)
      const current = parseFloat(state.currentOperand)
      const sksksk = state.operation
      switch (sksksk){
        case '+':
          computacao = prev + current
          break
        case '-':
          computacao = prev - current
          break
        case '*':
          computacao = prev * current
          break
        case '/':
          computacao = prev / current
          break
        default:
          computacao = ""        
        }
      const computation = getDisplayNumber(computacao)
      return{
        currentOperand: computation,
        operation: '',
        previousOperand: '',
        }
    });
  }
  

  clear() {
    this.setState(state =>{
      return{
        currentOperand: "",
      }
    });
  }




  render() {
    return (
      <div className="App">
        <div class="Output">
          <Display value={this.state.previousOperand} />
          <Display value={this.state.currentOperand} />
        </div>

        <Button text="+" aoClicar={() => this.addOperation("+")}/>
        <Button text="-" aoClicar={() => this.addOperation("-")}/>
        <Button text="*" aoClicar={() => this.addOperation("*")}/>
        <Button text="/" aoClicar={() => this.addOperation("/")} />
        <Button text="7" aoClicar={() => this.addNumber("7")} />
        <Button text="8" aoClicar={() => this.addNumber("8")} />
        <Button text="9" aoClicar={() => this.addNumber("9")} />
        <ButtonEqual text="=" aoClicar={() => this.computar()}/>
        <Button text="4" aoClicar={() => this.addNumber("4")} />
        <Button text="5" aoClicar={() => this.addNumber("5")} />
        <Button text="6" aoClicar={() => this.addNumber("6")} />
        <Button text="1" aoClicar={() => this.addNumber("1")} />
        <Button text="2" aoClicar={() => this.addNumber("2")} />
        <Button text="3" aoClicar={() => this.addNumber("3")} />
        <Button text="0" aoClicar={() => this.addNumber("0")} />
        <Button text="." aoClicar={() => this.addNumber(".")} />
        <Button text="C" aoClicar={() => this.clear()} />
        <ul>       
        {
          this.state.memo.map(
            (val) => <h1>{val}</h1>
          )
        }
        </ul>
      </div> 

    );
  }
}

export default App;