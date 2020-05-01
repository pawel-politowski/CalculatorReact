import React from 'react';
import { StyledOperatorButton } from './OperatorButton.style';

const OperatorButton = (props) => {
    return (
    <StyledOperatorButton>{props.children}</StyledOperatorButton>
    );
}

export default OperatorButton;


