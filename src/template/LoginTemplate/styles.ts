import styled from 'styled-components';

export const Layout = styled.div`
    display: grid;
    grid-template-columns: calc(50% - 226px) 452px calc(50% - 226px);
    grid-template-rows: calc(50% - 178px - 15px) 356px calc(50% - 178px - 15px) 30px;

    background: var(--THEME_COLOR_003);
    height: 100%;
`;

export const BottomBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    grid-row: 4 / 5;
    grid-column: 1 / 4;

    background: var(--THEME_COLOR_001);
    color: var(--THEME_COLOR_003);
    
    font-size: 14px;
    height: 100%;
    width: 100%; 
`;
