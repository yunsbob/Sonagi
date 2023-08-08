import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        color: ${({ theme }) => theme.color.black1};
    }

    ul, ol, li {
        list-style: none;
    }

    body {
        width: 100vw;
        height: 100vh;
        font-family: 'Happiness-Sans', 'Inter', sans-serif;
    }

    .scrollable {
        /* height: calc(100vh - 17rem); */
        overflow: auto;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
        &::-webkit-scrollbar {
            display: none;
        }
    }
`;

export default GlobalStyle;
