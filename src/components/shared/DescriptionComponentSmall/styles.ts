import styled from 'styled-components';

export const Container = styled.div`
    background: inherit;
    color: var(--THEME_COLOR_005);
    display: flex;
    flex-direction: column;
    height: 60px;
    justify-content: space-between;
    width: 100%;
`;

export const Box = styled.div`
    align-items: center;
    background: var(--THEME_COLOR_003);
    border-radius: 8px;
    color: var(--THEME_COLOR_004);
    display: flex;
    height: 34px;
    padding: 0 16px;
    width: 100%;
`;
