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

    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-moz-keyframes fadein { /* Firefox */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }

    @-webkit-keyframes fadein { /* Safari and Chrome */
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }   

    @keyframes fadeout {
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    @-moz-keyframes fadeout { /* Firefox */
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
    @-webkit-keyframes fadeout { /* Safari and Chrome */
        from {
            opacity: 1;
        }
        to {
            opacity: 0;
        }
    }
`;

export default GlobalStyle;
