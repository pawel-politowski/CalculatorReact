import React, {useState} from 'react';
import './App.css';
import Button from './Components/Button/Button';
import OperatorButton from './Components/OperatorButton/OperatorButton'
import Input from './Components/Input/Input';
import ClearButton from './Components/ClearButton/ClearButton';

function App() {
  const [input, setInput] = useState('')


  return (
    <div className="app">
      <div className="calcContainer">
        <Input input={input}></Input>
        <div className="row">
            <Button>7</Button>
            <Button>8</Button>
            <Button>9</Button>
            <OperatorButton>/</OperatorButton>
        </div>
        <div className="row">
            <Button>4</Button>
            <Button>5</Button>
            <Button>6</Button>
            <OperatorButton>*</OperatorButton>
        </div>
        <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <OperatorButton>+</OperatorButton>
        </div>
        <div className="row">
            <Button>.</Button>
            <Button>0</Button>
            <Button>=</Button>
            <OperatorButton>-</OperatorButton>
        </div>
        <ClearButton handleClear={() => setInput('')}>CLEAR</ClearButton>
      </div>
    </div>
  );
}

export default App;
