import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box; 
    };
    
    body {
        background-color: ${({ theme }) => theme.colors.primary};
        font-family: ${({ theme }) => theme.font.fontPrimary};
        height: 100vh;
        display: flex;
        flex-direction: column;
       background-image: url("img_backgroud.png");
        background-repeat: no-repeat;
        background-position: right;
    }
`