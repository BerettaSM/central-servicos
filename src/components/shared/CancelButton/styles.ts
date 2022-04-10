import styled from 'styled-components';

import { Cancel } from 'styled-icons/material-outlined';

export const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    
    background: inherit;
    color: var(--THEME_COLOR_001);
    border: 1px solid var(--THEME_COLOR_001);

    cursor: pointer;

    border-radius: 8px;
    font-size: 16px;
    height: 40px;
    padding: 0 20px;
    width: 150px;
`;
export const CancelIcon = styled(Cancel)`
    color: var(--THEME_COLOR_001);
    width: 14px;
`;