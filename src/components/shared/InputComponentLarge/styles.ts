import styled from 'styled-components';

export const Container = styled.div`
    background: inherit;
    color: var(--THEME_COLOR_005);
    display: flex;
    flex-direction: column;
    height: 273px;
    justify-content: space-between;
    width: 100%;
`;

export const InputField = styled.div`
    background: var(--THEME_COLOR_002);
    border-radius: 8px;
    color: var(--THEME_COLOR_004);
    display: flex;
    height: 243px;
    width: 100%;
`;

export const InputForm = styled.textarea`
    background: none;
    border-radius: 8px;
    color: var(--THEME_COLOR_004);
    height: 100%;
    padding: 16px;
    resize: none;
    width: 100%;
`;