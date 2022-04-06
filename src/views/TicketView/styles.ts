import styled from 'styled-components';

// CA - Chat Area
// TA - Ticket Area

export const Layout = styled.div`
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 100%;
    grid-template-areas: 
        "CA TA";
    
    background: var(--THEME_COLOR_003);
    border-radius: 8px;
    height: 100%;
    > div {
        margin: 12px;
    }
`;
