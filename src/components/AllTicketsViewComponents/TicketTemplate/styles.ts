import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;

    background: var(--THEME_COLOR_002);
    color: var(--THEME_COLOR_005);

    border: 1px solid var(--THEME_COLOR_002);
    border-radius: 8px;
    
    cursor: pointer;
    
    font-size: 12px;
    height: 70px;
    min-width: 650px;
    padding: 0 12px;
    margin-bottom: 12px;
    width: 100%;

    :hover{
        border: 1px solid var(--THEME_COLOR_001);
    }
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
    width: 100%; 
`;

