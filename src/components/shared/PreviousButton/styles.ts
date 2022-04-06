import styled from 'styled-components';

import { NavigateBefore } from 'styled-icons/material';

export const Button = styled.div`
    align-items: center;
    background: var(--THEME_COLOR_002);
    border: 1px solid var(--THEME_COLOR_002);
    color: var(--THEME_COLOR_004);
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    font-size: 18px;
    height: 40px;
    width: 120px;
    :hover {
        border: 1px solid var(--THEME_COLOR_001);
        color: var(--THEME_COLOR_001);
    }
`;

export const LeftArrowIcon = styled(NavigateBefore)`
    color: var(--THEME_COLOR_001);
    margin-left: 10px;
    width: 24px;
`;