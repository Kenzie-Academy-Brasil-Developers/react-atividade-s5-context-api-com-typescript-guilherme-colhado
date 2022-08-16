import styled, { css } from "styled-components";

interface ButtonStyleProps {
    cart?: boolean 
}

export const Button = styled.button<ButtonStyleProps>`
    border: none;
    width: 90%;
    padding: 10px 5px;
    color: white;
    border-radius: 5px;
    cursor: pointer;
    transition: all 0.5s;
    ${props => props.cart ? css`background-color: var(--orange);` : css`background-color: var(--purple1);`}
    &:hover{
        filter: brightness(1.25);
        transform: scale(1.1);
    }
`