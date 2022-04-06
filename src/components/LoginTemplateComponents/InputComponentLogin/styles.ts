import styled from 'styled-components';

import { User } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
    align-items: center;
    background: var(--THEME_COLOR_003);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    height: 52px;
    width: 332px;
`;

export const LoginForm = styled.input`
    background: none;
    width: calc(100% - 20px - 17px - 20px);
`;

export const UserIcon = styled(User)`
    color: var(--THEME_COLOR_004);
    margin: 0 20px;
    width: 17px;
`;
