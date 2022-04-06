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
    
`;

export const UpperWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3px 0;

    > span:first-of-type {
        color: var(--THEME_COLOR_001);
    }

    > span:last-of-type {
        font-weight: bold;
        margin-left: 12px;
    }

`;

export const MiddleWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3px 0;
    color: var(--THEME_COLOR_001);
    font-weight: bold;
`;

export const BottomOuterWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3px 0;
`;

export const BottomInnerWrapper = styled.div`
    display: flex;
    > span {
        margin: 0 12px 0 6px;   
    }
`;

export const OpenDateIcon = styled(CalendarAlt)`
    height: 12px;
`;

export const UserIcon = styled(User)`
    height: 14px;
`;

export const DueDateIcon = styled(CalendarCheck)`
    height: 12px;
`;