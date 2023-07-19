import { createGlobalStyle } from "styled-components";

export const GlobalReset = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
    }

    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body{
        font-family: "Inter", sans-serif;
        background: var(--color-black);
        background: -webkit-linear-gradient(
            to right,
            var(--color-black),
            var(--color-gray)
        );
        background: linear-gradient(to right, var(--color-black), var(--color-gray));
    }

    ::-webkit-scrollbar{
        width: 2px;
        height: 0;
    }

    ::-webkit-scrollbar-track{
        background-color: #000;

        border-radius: 0.5rem;
    }

    ::-webkit-scrollbar-thumb{
        background-color: #ff0000;

        border-radius: 0.5rem;
    }

    ol, ul {
        list-style: none;
    }
    
    blockquote, q {
        quotes: none;
    }
    
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: "";
        content: none;
    }
    
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    button, input, select, a, textarea{
        outline: none;
    }
    
    button{
        cursor: pointer;
    }
    
    a{
        text-decoration: none;
    }
`;
