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

    const { ticketId, descStatus, title, openedBy, dateStart, dateEnd } = props.data;

    const { fullName } = openedBy;

    return (

        <Container>

            <UpperWrapper>

                <span>#{ticketId}</span>

                <span>{descStatus}</span>

            </UpperWrapper>

            <MiddleWrapper>

                <span>{title}</span>

            </MiddleWrapper>

            <BottomOuterWrapper>

                <BottomInnerWrapper>

                    <UserIcon />

                    <span>{fullName}</span>

                </BottomInnerWrapper>

                <BottomInnerWrapper>

                    <OpenDateIcon />

                    <span>{dateStart}</span>

                </BottomInnerWrapper>

                <BottomInnerWrapper>

                    <DueDateIcon />

                    <span>{dateEnd}</span>

                </BottomInnerWrapper>

            </BottomOuterWrapper>

        </Container>

    );
    
}

export default TicketComponentDetails;