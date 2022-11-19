import React, {  useEffect, useRef, useState } from 'react';

import { Container } from './styles';

import MessageTemplate from '../MessageTemplate';

import { Api } from '../../../Api';
import TicketData from '../../shared/Interfaces/TicketData';
import TicketMessageResponseDTO from '../../shared/Interfaces/TicketMessageResponseDTO';

const MessagesContainer: React.FC<TicketData> = ({ data }) => {

    const ticketId = data?.ticketId;
    
    const bottomRef = useRef<null | HTMLDivElement>(null);

    // const [messages, setMessages] = useState<boolean[]>([]); // Mudar o tipo

    const [messages, setMessages] = useState<TicketMessageResponseDTO[]>([]);

    const scrollToBottom = () => {

        bottomRef.current?.scrollIntoView({ behavior: "smooth" });

    }

    // useEffect(() => { // Apenas testes, deletar

    //     const addMessage = setInterval(() => {

    //         const outgoingMessage = Math.random() < .5;

    //         setMessages(current => [

    //             ...current,
    //             outgoingMessage

    //         ]);

    //     }, 2000);

    //     return () => clearInterval(addMessage);

    // }, []);

    const { REACT_APP_MOCK_USER_ID } = process.env;

    const mockUserID = REACT_APP_MOCK_USER_ID ? Number(REACT_APP_MOCK_USER_ID) : 1; // Imitar um usuário logado.

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

        if(ticketId !== undefined && messages.length === 0)

            (async () => {

                getTicketMessages();

            })()

        scrollToBottom();

    }, [messages, ticketId])

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