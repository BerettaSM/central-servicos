import styled from 'styled-components';

import { PaperPlane } from 'styled-icons/ionicons-sharp';

export const Container = styled.div`
    background: inherit;
    color: var(--THEME_COLOR_005);
    display: flex;
    flex-direction: column;
    height: 60px;
    justify-content: space-between;
    width: 100%;
`;

export const InputField = styled.div`
    background: var(--THEME_COLOR_003);
    border-radius: 8px;
    color: var(--THEME_COLOR_004);
    display: flex;
    height: 34px;
    padding: 8px;
    width: 100%;

    > button {
        background: var(--THEME_COLOR_003);
    }
`;

export const InputForm = styled.input`
    background: inherit;
    border-radius: 8px 0 0 8px;
    border-right: 1px solid var(--THEME_COLOR_005);
    color: var(--THEME_COLOR_004);
    font-size: 16px;
    margin-right: 18px;
    padding-left: 16px;
    width: 100%;
`;

export const PaperPlaneIcon = styled(PaperPlane)`
    color: var(--THEME_COLOR_005);
    margin-right: 12px;
    width: 14px;

    cursor: pointer;
`;