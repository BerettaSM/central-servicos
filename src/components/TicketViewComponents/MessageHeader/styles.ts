import styled from 'styled-components';

import { CalendarAlt } from 'styled-icons/fa-solid';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    
`;

export const TicketDetailsOuterWrapper = styled.div`
    display: flex;

`;

export const TicketDetailsInnerWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 12px;

    > span {
        color: var(--THEME_COLOR_001);
    }
    > span:last-of-type {
        font-weight: bold;
        margin: 6px 0;
    }
`;

export const TimeStampWrapper = styled.div`
    display: flex;
    align-items: center;
`;

export const DatetimeStampWrapper = styled.div`
    display: flex;

    > span {
        margin-left: 12px;
    }
`;

export const DatetimeStampIcon = styled(CalendarAlt)`
    color: var(--THEME_COLOR_005);
    width: 14px;
`;
