import styled from "styled-components";

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 280px;
    border-radius: 10px;
    box-shadow: 5px 5px 10px black;
    background-color: white;
    padding: 0 5px 10px;
    >div{
        width: 100%;
        height: 480px;
        display: flex;
        flex-direction: column;
        figure{
            width: 100%;
            height: 70%;
            display: flex;
            justify-content: center;
            margin-bottom: 10px;
            img{
                max-width: 100%;
                height: 100%;
            }
        }
        div{
            text-align: center;
            h2{
                font-size: 2.5rem;
                font-weight: 600;
                margin-bottom: 10px;
            }
            h3{
                font-size: 2rem;
                color: var(--purple2)
            }
        }
    }
`