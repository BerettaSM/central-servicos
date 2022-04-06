import React from 'react';

import { Container, DueDateIcon, Wrapper, OpenDateIcon, UserIcon } from './styles';

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
            <Wrapper>
                <span>#{_id}</span>
                <span>{statusString}</span>
            </Wrapper>
            <Wrapper>
                <span>{ticketTitle}</span>
            </Wrapper>
            <Wrapper>
                <Wrapper>
                    <UserIcon />
                    <span>{userName}</span>
                </Wrapper>
                <Wrapper>
                    <OpenDateIcon />
                    <span>{openDate}</span>
                </Wrapper>
                <Wrapper>
                    <DueDateIcon />
                    <span>{dueDate}</span>
                </Wrapper>
            </Wrapper>
        </Container>
    );
}

export default TicketComponent_Details;