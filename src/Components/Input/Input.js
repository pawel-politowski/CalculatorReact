import React from 'react';
import { StyledInput } from './Input.style'

const Input = (props) => {
    return (
    <StyledInput>{props.input}</StyledInput>
      );
}
 
export default Input;