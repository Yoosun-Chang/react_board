import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button `
    padding: 8px 16px;
    font-size: 16px;
    border-width: 1px;
    border-radius: 8px;
    cursor: pointer;
    background-color : pink;
    border: none;
`

function Button(props) {
    const {title, onClick, disabled} = props;
    return (
        <StyledButton onClick={onClick} disabled={disabled}>
            {title || "button"}
        </StyledButton>
    )
}

export default Button