import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      currentOperand: ''
    }
  }
  render(){
    return (
      <div className="App">
        <Display value={this.state.correntOperand}/>
        {/* <Display value="2"/> */}
        
        <Button text="0" clicado={() => {
            this.setState(
              {
                currentOperand: this.state.currentOperand + "0"
              }
            );
          }
        } />
        <Button text="1"/>
        <Button text="2"/>
        <Button text="3"/>
        <Button text="4"/>
        <Button text="5"/>
        <Button text="6"/>
        <Button text="7"/>
        <Button text="8"/>
        <Button text="9"/>

        <Button text="+"/>
        <Button text="-"/>
        <Button text="/"/>
        <Button text="*"/>

        {/*<Keypad/>
        <OperationButtons/>
        <EqualButton/> */}
      </div>
    );
  }
}

function Button(props) {
  return(
    <button onClick={props.clicado}>{props.text}</button>
  )
}

function Display(props) {
  return (
    <div className="App">
      <p>{props.value}</p>
    </div>
  );
}

export default App;
