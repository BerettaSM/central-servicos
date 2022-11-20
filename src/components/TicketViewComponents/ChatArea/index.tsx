import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import ViewTitle from '../../../components/shared/ViewTitle';
import InputComponentMessage from '../../../components/shared/InputComponentMessage';
import ClickableSpan from '../../shared/ClickableSpan';

import { Container, Wrapper } from './styles';
import MessagesContainer from '../MessagesContainer';

import TicketData from '../../shared/Interfaces/TicketData';

import { Client, frameCallbackType, IFrame, StompSubscription, messageCallbackType, IMessage } from '@stomp/stompjs';

import TicketMessageRequestDTO from '../../shared/Interfaces/TicketMessageRequestDTO';

import TicketMessageResponseDTO from '../../shared/Interfaces/TicketMessageResponseDTO';


const ChatArea: React.FC<TicketData> = ({ data }) => {

    const ticketId = data?.ticketId;

    const navigate = useNavigate();

    const searchParams = useSearchParams()[0];

    let stompClient = useRef<Client | null>(null);

    let stompSubscription = useRef<StompSubscription | null>(null);

    const [messages, setMessages] = useState<TicketMessageResponseDTO[]>([]);

    /* PARA TESTES ABAIXO */
    const { REACT_APP_MOCK_USER_ID } = process.env; // Imitar um usuário logado.
    const mockUserID = REACT_APP_MOCK_USER_ID ? Number(REACT_APP_MOCK_USER_ID) : 1; // Imitar um usuário logado.
    /* PARA TESTES ACIMA */

    const navigateBack = () => {

        const userWasRedirected = searchParams.get("redirected") !== null;

        if(userWasRedirected) {

            navigate("/tickets");

        } else {

            navigate(-1);

        }

    }

    const onConnect: frameCallbackType = useCallback( (frame: IFrame) => {
        
        if(stompClient.current !== null && ticketId !== undefined) {
            
            stompSubscription.current = stompClient.current.subscribe(`/topic/ticket/${ticketId}`, onMessageReceived);

        } else {

            alert('Não foi possível conectar ao chat.');

        }

    }, [ticketId]);

    const onDisconnect = useCallback(() => {

        if(stompSubscription.current !== null) {
            
            stompSubscription.current.unsubscribe();

        }

        if(stompClient.current !== null) {

            alert('Usuário desconectado');

            stompClient.current.deactivate();

        }

    }, []);

    const onError: frameCallbackType = useCallback( (frame: IFrame) => {

        console.error("O Message Broker está reportando o seguinte erro: " + frame.headers['message']);

        console.error("Detalhes adicionais: " + frame.body);

    }, []);

    const onMessageReceived: messageCallbackType = (message: IMessage) => {

        if(message.body) {

            const newMessage: TicketMessageResponseDTO = JSON.parse(message.body);

            setMessages(currentMessages => [

                ...currentMessages,
                newMessage

            ]);

        } 

    }

    const sendMessage = (message: string) => {

        if(stompClient.current !== null && ticketId !== undefined) {

            const payload: TicketMessageRequestDTO = {
                message: message,
                ticketId: ticketId,
                senderId: mockUserID
            }

            stompClient.current.publish({destination: `/app/message/${ticketId}`, body: JSON.stringify(payload)});

        } else {

            alert("Não foi possível enviar a mensagem.");

        }

    }

    useEffect(() => {
        
        if(ticketId !== undefined) {

            (() => {

                stompClient.current = new Client({ brokerURL: 'ws://localhost:8080/ws' });
        
                stompClient.current.onConnect = onConnect;
        
                stompClient.current.onStompError = onError;
    
                stompClient.current.activate();
    
                alert('Usuário conectado.');
        
            })()
    
            return () => onDisconnect();

        }

    }, [onConnect, onDisconnect, onError, ticketId])

    return (

        <Container>

            <Wrapper>

                <ViewTitle innerText="Todos Os Tickets" />

                <ClickableSpan 
                    onClick={navigateBack}
                    innerText="Voltar"
                />

            </Wrapper>

            <MessagesContainer data={data} messages={messages} setMessages={setMessages} />
            
            <InputComponentMessage 
                title="Escreva Sua Mensagem"
                placeholder="Digite aqui"
                onSubmitEvent={sendMessage}
            />

        </Container>

    );
    
}

export default ChatArea;