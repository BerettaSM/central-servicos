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

interface TicketComponentDetailsData {
    data: any;
}

const TicketComponent_Details: React.FC<TicketComponentDetailsData> = (props) => {

    const { _id, status, ticketTitle, userName, openDate, dueDate } = props.data;

    const statusString = status === 1 ? "Ticket Aberto"
                        :status === 2 ? "Ticket em Andamento"
                        :status === 3 ? "Ticket Fechado" : "Ticket Cancelado";

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