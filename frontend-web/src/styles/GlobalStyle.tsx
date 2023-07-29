import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    ul, ol, li {
        list-style: none;
    }

    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Happiness-Sans', 'Inter', sans-serif;
    }
   
`;

export default GlobalStyle;
