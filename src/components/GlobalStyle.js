import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body {
        background:#E79B8B;
        color:purple;
        font-family:'Arail';
        font-size:1.5em;
        margin:5px;
    }

    p {
        opacity: 0.5;
        line-height: 1.5
    }
`;
export default GlobalStyles;
