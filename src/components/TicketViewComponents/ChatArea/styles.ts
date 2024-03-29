import styled from 'styled-components';

export const Container = styled.div`
    grid-area: CA;

    background: var(--THEME_COLOR_002);
    border-radius: 8px;
    
    > div:last-of-type {
        margin: 0 12px 12px 12px;
        width: calc(100% - 24px);
    }

`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    
    background: none;
    height: 48px;
    padding: 12px;
    margin: 12px 12px 0 12px;

    > a {
        text-decoration: none;
    }

`;
