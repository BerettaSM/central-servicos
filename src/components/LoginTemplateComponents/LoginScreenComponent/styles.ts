import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    grid-row: 2 / 3;
    grid-column: 2 / 3;

    background: var(--THEME_COLOR_002);   
    border-radius: 8px;
    height: 100%;

    > span {
        display: flex;
        font-size: 12px;
        margin-top: 12px;
    }

    > span:first-of-type {
        color: var(--THEME_COLOR_001);
        cursor: pointer;
        justify-content: end;
        margin-right: 62px;
    }
    
    > span:last-of-type {
        color: var(--THEME_COLOR_005);
        justify-content: center;
    }
`;

export const LoginTitle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    background: var(--THEME_COLOR_001);
    color: var(--THEME_COLOR_003);

    border-radius: 8px;
    font-size: 22px;
    height: 68px;
    margin-bottom: 45px;
    width: 100%;
`;

export const Wrapper = styled.div`
    margin: 0 auto;

    > div:nth-of-type(2) {
        margin: 12px 0;
    }
`;