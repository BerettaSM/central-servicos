import React, {  useEffect, useRef } from 'react';

import { Container } from './styles';

import MessageTemplate from '../MessageTemplate';

import TicketMessagesState from '../../shared/Interfaces/TicketMessagesState';

const MessagesContainer: React.FC<TicketMessagesState> = ({ messages }) => {

    /* PARA TESTES ABAIXO */
    const { REACT_APP_MOCK_USER_ID } = process.env; // Imitar um usuário logado.
    const mockUserID = REACT_APP_MOCK_USER_ID ? Number(REACT_APP_MOCK_USER_ID) : 1; // Imitar um usuário logado.
    /* PARA TESTES ACIMA */

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

                        <MessageTemplate key={idx} data={message} outgoing={message.senderId === mockUserID} />

                ))

            }

            <div ref={bottomRef} />

        </Container>

    );

}

export default MessagesContainer;