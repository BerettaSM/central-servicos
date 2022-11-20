import React, {  useEffect, useRef, useState } from 'react';

import { Container } from './styles';

import MessageTemplate from '../MessageTemplate';

import { Api } from '../../../Api';
import TicketData from '../../shared/Interfaces/TicketData';

import TicketMessagesState from '../../shared/Interfaces/TicketMessagesState';

type MessagesContainerInterface = TicketData & TicketMessagesState;

const MessagesContainer: React.FC<MessagesContainerInterface> = ({ data, messages, setMessages }) => {

    const ticketId = data?.ticketId;
    
    const bottomRef = useRef<HTMLDivElement | null>(null);

    const [messagesWereFetched, setMessagesWereFetched] = useState<boolean>(false);

    const scrollToBottom = () => {

        bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    }

    /* PARA TESTES ABAIXO */
    const { REACT_APP_MOCK_USER_ID } = process.env; // Imitar um usuário logado.
    const mockUserID = REACT_APP_MOCK_USER_ID ? Number(REACT_APP_MOCK_USER_ID) : 1; // Imitar um usuário logado.
    /* PARA TESTES ACIMA */

    useEffect(() => {

        const getTicketMessages = async () => {
        
            await Api.get(`/api/ticket-message?ticketId=${ticketId}`)
    
                .then((res: any) => {
    
                    let results = res.data;
                    
                    if(results) {
    
                        setMessages(results);
    
                    }
    
                })
    
                .catch((error: any) => {
    
                    console.error(error);
    
                })
    
        }

        if(ticketId !== undefined && messages.length === 0 && !messagesWereFetched) {

            setMessagesWereFetched(true);

            (async () => {

                getTicketMessages();

            })() 

        }

        scrollToBottom();

    }, [messages, setMessages, ticketId, messagesWereFetched])

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