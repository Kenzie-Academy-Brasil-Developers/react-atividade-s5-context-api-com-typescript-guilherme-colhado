import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 500px;
    width: 280px;
    box-shadow: 5px 5px 10px black;
    figure{
        width: 100%;
        img{
            width: 80%;
        }
    }
    div{
        h3{
            color: var(--purple2)
        }
    }
`