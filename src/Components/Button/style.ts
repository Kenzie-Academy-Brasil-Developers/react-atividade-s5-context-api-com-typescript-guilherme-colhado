import styled, { css } from "styled-components";

interface ButtonStyleProps {
    cart?: boolean 
}

export const Button = styled.button<ButtonStyleProps>`
    border: none;
    width: 90%;
    padding: 10px 5px;
    color: white;
    ${props=> props.cart ? css`background-color: var(--orange)` : css`background-color: var(--purple1)`}
`