import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
${'' /* RESET */}
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
        box-sizing: border-box;
    }

    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }

    body {
        line-height: 1;
        background-color: var(--color-gray-4);
        font-family: 'Inter', sans-serif;
    }

    ol, ul {
        list-style: none;
    }

    blockquote, q {
        quotes: none;
    }

    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }

    table {
        border-collapse: collapse;
        border-spacing: 0;
    }

    a {
        text-decoration: none;
    }

    button {
        cursor: point;
        border: none;
        background: transparent;
    }

    input, select {
        background: transparent;
        border: none;
    }

    ${'' /* VARIÁVEIS */}

    :root {

        --color-primary: #0F4FFE;
        --color-primary-focus: #003CE0;
        --color-primary-negative: #012483;

        --color-gray-4: #121214;
        --color-gray-3: #212529;
        --color-gray-2: #343B41;
        --color-gray-1: #868E96;
        --color-gray-0: #F8F9FA;

        --color-negative: #E83F5B;
        --color-success: #3FE864;

        --toastify-color-dark: var(--color-gray-2);
        --toastify-color-error: var(--color-negative);
        --toastify-color-success: var(--color-success);
    }
`