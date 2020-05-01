import React from 'react';
import { StyledButton } from './Button.style'


const Button = (props) => {
    return (
    <StyledButton onClick={() => props.handleClick(props.children)}>{props.children}</StyledButton>
    )
}
 
export default Button;
