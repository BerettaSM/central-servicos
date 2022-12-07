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

import TicketData from '../Interfaces/TicketData';

const TicketComponentDetails: React.FC<TicketData> = ({ data }) => {

    const ticketId = data?.ticketId;

    const statusDescription = data?.statusDescription;

    const title = data?.title;

    const responsibleUser = data?.openedBy?.fullName;

    const dateStart = data?.dateStart;

    const dateEnd = data?.dateEnd;

    return (

        <Container>

            <UpperWrapper>

                <span>#{ticketId}</span>

                <span>{statusDescription}</span>

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