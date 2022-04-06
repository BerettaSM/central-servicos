import styled from 'styled-components';

import { NavigateNext } from 'styled-icons/material';

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
    justify-content: end;
    width: 120px;
    :hover {
        border: 1px solid var(--THEME_COLOR_001);
        color: var(--THEME_COLOR_001);
    }
`;
export const RightArrowIcon = styled(NavigateNext)`
    color: var(--THEME_COLOR_001);
    margin-right: 10px;
    width: 24px;
`;