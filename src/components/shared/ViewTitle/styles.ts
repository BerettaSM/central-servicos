import styled from 'styled-components';

import { NavigateNext } from 'styled-icons/material';

export const Container = styled.div`
    align-items: center;
    color: var(--THEME_COLOR_001);
    display: flex;
    flex-direction: row;
`;

export const RightArrowIcon = styled(NavigateNext)`
    width: 24px;
`;
