import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        min-height: 100vh;
    }
    
    body, header, main, section, figure, img, div, p, button, h1, h2, h3, h4, ul, li, a{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
    }

    :root{
        font-size: 8px;
        --purple1: #a634b8;
        --purple2: #9115a6;
        --orange: #de6525;
        --gray: #f2f3f0; 
    }
`