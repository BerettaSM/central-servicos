import styled from 'styled-components';

// DA - Data Area
// CA - Chart Area

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 70% 30%;
    grid-template-areas: 
        "CA"
        "DA";

    background: var(--THEME_COLOR_003);
    border-radius: 8px;
    height: 100%;
    padding: 12px;
`;

export const Container = styled.div`
    position: relative;
    background: var(--THEME_COLOR_003);
    height: 100%;
    width: 100%;
    border-radius: 8px;
`;

export const DataArea = styled.div`
    grid-area: "DA";
    margin: 0 auto;
`;

export const ChartArea = styled.div`
    grid-area: "CA";
    margin: 0 50px;
    padding: 25px;
`;