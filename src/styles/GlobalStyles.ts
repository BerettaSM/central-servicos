import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html, body, #root {
        height: 100%;
    }
    
    *, button, input {
        font-family: 'Roboto', sans-serif;
        border: 0;
        outline: 0;
    }

    :root {

        --THEME_COLOR_001: #04AEAD;
        --THEME_COLOR_002: #F9F9F9;
        --THEME_COLOR_003: #FFFFFF;
        --THEME_COLOR_004: #64646C;
        --THEME_COLOR_005: #8C8C8E;
        --THEME_COLOR_006: #bfbfbf;

        --PRIORITY_LOW: #25BE75;
        --PRIORITY_MEDIUM: #FED402;
        --PRIORITY_HIGH: #FF8C00;
        --PRIORITY_URGENT: #FF0000;

        --CONNECTED: #25BE75;
        --DISCONNECTED: #FF0000;

        --DEADLINE_ONTIME: var(--PRIORITY_LOW);
        --DEADLINE_LATE: var(--PRIORITY_URGENT);
    }

`;