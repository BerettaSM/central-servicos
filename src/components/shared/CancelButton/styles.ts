import styled from 'styled-components';

import { Cancel } from 'styled-icons/material-outlined';

export const Button = styled.div`
    align-items: center;
    background: inherit;
    border: 1px solid var(--THEME_COLOR_001);
    color: var(--THEME_COLOR_001);
    cursor: pointer;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    font-size: 16px;
    height: 40px;
    justify-content: space-between;
    padding: 0 20px;
    width: 150px;
`;
export const CancelIcon = styled(Cancel)`
    color: var(--THEME_COLOR_001);
    width: 14px;
`;