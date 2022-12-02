import React from 'react';

import MessageHeader from '../MessageHeader';

import {
    Container,
    MessageContainer
} from './styles';

import TicketMessageAndDirection from '../../shared/Interfaces/TicketMessageAndDirection';

const MessageTemplate: React.FC<TicketMessageAndDirection> = ({ data, outgoing }) => {

    const { message } = data;

    return (

        <Container outgoing={outgoing}>

            <MessageHeader data={data}  />
            
            <MessageContainer>

                <span>{message}</span>

            </MessageContainer>

        </Container>

    );

}

export default MessageTemplate;