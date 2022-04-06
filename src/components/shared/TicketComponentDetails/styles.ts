import styled from 'styled-components';

import { CalendarAlt, CalendarCheck } from 'styled-icons/fa-solid';
import { User } from 'styled-icons/boxicons-solid';

export const Container = styled.div`
    display: flex;  
    flex-direction: column;
    font-size: 12px;
    justify-content: center;
    margin-left: 15px;
    width: 400px;
    > div {
        flex-direction: row;
        margin: 3px 0;
    }
    > div:first-of-type  {
        > span:first-of-type {
            color: var(--THEME_COLOR_001);
        }
        > span:last-of-type {
            font-weight: bold;
            margin-left: 12px;
        }
    }
    > div:nth-of-type(2) {
        color: var(--THEME_COLOR_001);
        font-weight: bold;
    }
    > div:last-of-type {
        flex-direction: row;
        > div > span {
            margin: 0 12px 0 6px;   
        }
    }
`;

export const Wrapper = styled.div`
    display: flex;
`;

export const OpenDateIcon = styled(CalendarAlt)`
    height: 14px;
`;

export const UserIcon = styled(User)`
    height: 14px;
`;

export const DueDateIcon = styled(CalendarCheck)`
    height: 14px;
`;