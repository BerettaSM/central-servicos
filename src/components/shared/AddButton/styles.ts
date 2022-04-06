import styled from 'styled-components';

import { PlusCircle } from 'styled-icons/bootstrap';

export const Button = styled.div`
    align-items: center;
    background: var(--THEME_COLOR_001);
    color: var(--THEME_COLOR_003);
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
export const PlusIcon = styled(PlusCircle)`
    color: var(--THEME_COLOR_002);
    width: 12px;
`;