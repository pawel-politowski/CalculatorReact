import React from 'react';
import { StyledOperatorButton } from './OperatorButton.style';

const OperatorButton = (props) => {
    return (
    <StyledOperatorButton onClick={() => props.handleClick(props.children)}>{props.children}</StyledOperatorButton>
    );
}

export default OperatorButton;


