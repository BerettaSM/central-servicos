import React, {  useEffect, useRef } from 'react';

import { Container } from './styles';

import MessageTemplate from '../MessageTemplate';

import TicketMessagesState from '../../shared/Interfaces/TicketMessagesState';
import { useUser } from '../../auth/UserProvider';

const MessagesContainer: React.FC<TicketMessagesState> = ({ messages }) => {

    const user = useUser();

    const bottomRef = useRef<HTMLDivElement | null>(null);

    const scrollToBottom = () => {

        bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    }

    useEffect(() => {

        scrollToBottom();

    }, [messages])

    return (

        <Container>

            {

                messages.map( (message, idx) => (

                        <MessageTemplate key={idx} data={message} outgoing={message.senderId === user.data.userId} />

                ))

            }

            <div ref={bottomRef} />

        </Container>

    );

}

export default MessagesContainer;