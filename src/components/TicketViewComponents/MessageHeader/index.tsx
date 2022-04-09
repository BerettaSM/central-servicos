import React from 'react';

import UserPic from '../../shared/UserPic';

import { 
    Container,
    TicketDetailsOuterWrapper,
    TicketDetailsInnerWrapper,
    TimeStampWrapper,
    DatetimeStampWrapper,
    DatetimeStampIcon
} from './styles';

const MessageHeader: React.FC = () => {

    return (

        <Container>

            <TicketDetailsOuterWrapper>

                <UserPic />

                <TicketDetailsInnerWrapper>

                    <span>#29</span>

                    <span>Juliana da Silva</span>

                    <DatetimeStampWrapper>

                        <DatetimeStampIcon />

                        <span>14/03/2022 10:20</span>

                    </DatetimeStampWrapper>

                </TicketDetailsInnerWrapper>

            </TicketDetailsOuterWrapper>

            <TimeStampWrapper>

                <span>15 minutos atrás</span>

            </TimeStampWrapper>

        </Container>

    );
    
}

export default MessageHeader;