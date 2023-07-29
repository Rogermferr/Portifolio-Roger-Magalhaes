import { createGlobalStyle } from "styled-components";

export const GlobalDarkStyle = createGlobalStyle`
    :root{
        --color-red: #CC0000;
        --color-white: #F5F5F5;
        --color-black: #000;
        --color-gray: #333333;
        --color-gray-two: #868E96;
    }
`;

export const GlobalLightStyle = createGlobalStyle`
    :root{
        --color-red: #CC0000;
        --color-white: #000;
        --color-black: #F5F5F5;
        --color-gray: #868E96;
        --color-gray-two: #333333;
    }
`;
