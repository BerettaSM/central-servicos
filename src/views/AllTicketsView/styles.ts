import styled from 'styled-components';
// OB - Options Bar
// TA - Tickets Area
// FA - Filter Area

export const Layout = styled.div`
    display: grid;

    grid-template-columns: 77% 23%;
    grid-template-rows: 40px calc(100% - 40px);
    grid-template-areas: 
        "OB FA"
        "TA FA";

    background: var(--THEME_COLOR_003);
    border-radius: 8px;
    height: 100%;
    padding: 12px;
`;
