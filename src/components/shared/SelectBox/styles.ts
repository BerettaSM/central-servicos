import styled from 'styled-components';

export const Select = styled.div`
    background: inherit;
    display: flex;
    flex-direction: column;
    height: 60px;
    justify-content: space-between;
    width: 100%;
    > select {
        background: var(--THEME_COLOR_002);
        border-radius: 8px;
        color: var(--THEME_COLOR_004);
        font-size: 16px;
        height: 34px;
        padding: 0 16px;
        width: 100%;
    }
`;

export const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    > span {
        color: var(--THEME_COLOR_005);
        margin-right: 10px;
    }
`;


