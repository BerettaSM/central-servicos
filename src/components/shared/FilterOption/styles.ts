import styled from 'styled-components';

import { NavigateNext } from 'styled-icons/material';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    background: var(--THEME_COLOR_003);
    color: var(--THEME_COLOR_004);

    border-radius: 8px;
    cursor: pointer;
    height: 40px;

    :hover {
        background: var(--THEME_COLOR_002);
        color: var(--THEME_COLOR_001);
    }
`;

export const RightArrowIcon = styled(NavigateNext)`
    width: 24px;
`;
