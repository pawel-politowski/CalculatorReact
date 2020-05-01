import React from 'react';
import { StyledButton } from './Button.style'


const Button = (props) => {
    return (
    <StyledButton>{props.children}</StyledButton>
    )
}
 
export default Button;
