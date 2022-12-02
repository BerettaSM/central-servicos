import React from 'react';

import useElapsedTime from '../../../hooks/useElapsedTime';

import UserPic from '../../shared/UserPic';

import { 
    Container,
    TicketDetailsOuterWrapper,
    TicketDetailsInnerWrapper,
    TimeStampWrapper,
    DatetimeStampWrapper,
    DatetimeStampIcon
} from './styles';

import TicketMessage from '../../shared/Interfaces/TicketMessage';

const MessageHeader: React.FC<TicketMessage> = ({ data }) => {

    const { id, senderId, senderName, senderLevel, sendDate } = data;

    const UPDATE_INTERVAL_IN_SECONDS = 60;

    const [ elapsedTime ] = useElapsedTime(sendDate, UPDATE_INTERVAL_IN_SECONDS);

    return (

        <Container>

            <TicketDetailsOuterWrapper>

                <UserPic />

                <TicketDetailsInnerWrapper>

                    <span>Mensagem #{id}</span>

                    <span>{senderName} (#{senderId}) - {senderLevel}</span>

                    <DatetimeStampWrapper>

                        <DatetimeStampIcon />

                        <span>{sendDate}</span>

                    </DatetimeStampWrapper>

                </TicketDetailsInnerWrapper>

            </TicketDetailsOuterWrapper>

            <TimeStampWrapper>

                <span>{elapsedTime}</span>

            </TimeStampWrapper>

        </Container>

    );
    
}

export default MessageHeader;