import styled from 'styled-components';

// OA - Options Area
// CA - Chart Area
// DA - Data Area

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 10% 65% 25%;
    grid-template-areas: 
        "OA"
        "CA"
        "DA";

    background: var(--THEME_COLOR_003);
    border-radius: 8px;
    height: 100%;
    padding: 12px;

    * {
        font-size: 20px;
    }

    > span {
        align-self: center;
        justify-self: center;
        color: var(--PRIORITY_URGENT);
    }

`;

export const Container = styled.div`
    position: relative;
    background: var(--THEME_COLOR_003);
    height: 100%;
    width: 100%;
    border-radius: 8px;
`;

export const OptionsArea = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 50px;
    grid-area: "OA";
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

export const RadiobuttonGrouper = styled.div`
    
`;

export const Grouper = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > span:first-child {
        font-size: 20px;
        margin-bottom: 20px;
    }

`;