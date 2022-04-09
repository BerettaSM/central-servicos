import React from 'react';

import { TicketData } from '../../AllTicketsViewComponents/TicketTemplate';
import {
    Container,
    DueDateIcon,
    OpenDateIcon,
    UserIcon,
    UpperWrapper,
    MiddleWrapper,
    BottomOuterWrapper,
    BottomInnerWrapper
} from './styles';

const TicketComponent_Details: React.FC<TicketData> = (props) => {

    const { _id, status, ticketTitle, userName, openDate, dueDate } = props.data;
    
    const statusString = status === 1 ? process.env.REACT_APP_TICKET_OPENED
                        :status === 2 ? process.env.REACT_APP_TICKET_ONGOING
                        :status === 3 ? process.env.REACT_APP_TICKET_CLOSED
                                      : process.env.REACT_APP_TICKET_CANCELLED;

    return (
        <Container>
            <UpperWrapper>
                <span>#{_id}</span>
                <span>{statusString}</span>
            </UpperWrapper>
            <MiddleWrapper>
                <span>{ticketTitle}</span>
            </MiddleWrapper>
            <BottomOuterWrapper>
                <BottomInnerWrapper>
                    <UserIcon />
                    <span>{userName}</span>
                </BottomInnerWrapper>
                <BottomInnerWrapper>
                    <OpenDateIcon />
                    <span>{openDate}</span>
                </BottomInnerWrapper>
                <BottomInnerWrapper>
                    <DueDateIcon />
                    <span>{dueDate}</span>
                </BottomInnerWrapper>
            </BottomOuterWrapper>
        </Container>
    );
}

export default TicketComponent_Details;