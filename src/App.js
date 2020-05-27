import React, {useState} from 'react';
import './App.css';
import Button from './Components/Button/Button';
import OperatorButton from './Components/OperatorButton/OperatorButton'
import Input from './Components/Input/Input';
import ClearButton from './Components/ClearButton/ClearButton';
import { evaluate } from 'mathjs';

function App() {
  const [input, setInput] = useState('0');

  const addToInput = (value) => {
    if (input === '0') {
    setInput(value)}  
   
    if (input !== '0') {
      setInput(input + value) 
    }
  };

  const evaluteInput = () => {
    setInput(evaluate(input))
  };


  return (
    <div className="app">
      <div className="calcContainer">
        <Input input={input}></Input>
        <div className="row">
            <Button handleClick={addToInput}>7</Button>
            <Button handleClick={addToInput}>8</Button>
            <Button handleClick={addToInput}>9</Button>
            <OperatorButton handleClick={addToInput}>/</OperatorButton>
        </div>
        <div className="row">
            <Button handleClick={addToInput}>4</Button>
            <Button handleClick={addToInput}>5</Button>
            <Button handleClick={addToInput}>6</Button>
            <OperatorButton handleClick={addToInput}>*</OperatorButton>
        </div>
        <div className="row">
            <Button handleClick={addToInput}>1</Button>
            <Button handleClick={addToInput}>2</Button>
            <Button handleClick={addToInput}>3</Button>
            <OperatorButton handleClick={addToInput}>+</OperatorButton>
        </div>
        <div className="row">
            <Button handleClick={addToInput}>.</Button>
            <Button handleClick={addToInput}>0</Button>
            <Button handleClick={evaluteInput}>=</Button>
            <OperatorButton handleClick={addToInput}>-</OperatorButton>
        </div>
        <ClearButton handleClear={() => setInput('0')}>CLEAR</ClearButton>
      </div>
    </div>
  );
};

export default App;
