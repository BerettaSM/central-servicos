import React from 'react';

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

import { TicketDataInterface } from '../Interfaces/TicketDataInterface';

const TicketComponentDetails: React.FC<TicketDataInterface> = (props) => {

    const { _id, status, ticketTitle, userName, openDate, dueDate } = props.data;

    const {
        REACT_APP_STATUS_OPENED,
        REACT_APP_STATUS_ONGOING,
        REACT_APP_STATUS_CLOSED,
        REACT_APP_STATUS_CANCELLED
    } = process.env;
    
    const statusString = status === 1 ? REACT_APP_STATUS_OPENED
                       : status === 2 ? REACT_APP_STATUS_ONGOING
                       : status === 3 ? REACT_APP_STATUS_CLOSED
                                      : REACT_APP_STATUS_CANCELLED;

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

export default TicketComponentDetails;