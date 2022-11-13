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

    const { data } = props;

    const ticketId = data?.ticketId;

    const descStatus = data?.descStatus;

    const title = data?.title;

    const openedBy = data?.openedBy;

    const responsibleUser = openedBy?.fullName;

    const dateStart = data?.dateStart;

    const dateEnd = data?.dateEnd;

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

                    <span>{responsibleUser}</span>

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