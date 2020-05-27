import React from 'react';
import { StyledClearButton} from './ClearButton.style';

const ClearButton = (props) => {
    return (
        <StyledClearButton onClick={props.handleClear}>{props.children}</StyledClearButton>
    )
};

export default ClearButton;