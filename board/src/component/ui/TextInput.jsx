import React from 'react'
import styled from 'styled-components'

const StyledTextarea = styled.textarea`
    width: 100%;
    ${(props) => props.height && `height: ${props.height}px;`}
    padding: 16px;
    font-size: 16px;
    line-height: 20px;
    border: 3px solid pink;
    border-radius: 8px;
`;

function TextInput(props) {
    const { height, value, onChange, placeholder } = props;
    return (
        <StyledTextarea
            height={height}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
        />
    );
}

export default TextInput;
