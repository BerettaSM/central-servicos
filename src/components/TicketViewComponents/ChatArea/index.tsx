import React, { useEffect, useRef, useCallback } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import ViewTitle from '../../../components/shared/ViewTitle';
import InputComponentMessage from '../../../components/shared/InputComponentMessage';
import ClickableSpan from '../../shared/ClickableSpan';

import { Container, Wrapper } from './styles';
import MessagesContainer from '../MessagesContainer';

import TicketData from '../../shared/Interfaces/TicketData';

import { Client, frameCallbackType, IFrame, StompSubscription, messageCallbackType, IMessage } from '@stomp/stompjs';

import TicketMessageRequestDTO from '../../shared/Interfaces/TicketMessageRequestDTO';


const ChatArea: React.FC<TicketData> = ({ data }) => {

    let stompClient = useRef<Client | null>(null);

    let stompSubscription = useRef<StompSubscription | null>(null);

    const searchParams = useSearchParams()[0];

    const navigate = useNavigate();

    const { REACT_APP_MOCK_USER_ID } = process.env;

    const mockUserID = REACT_APP_MOCK_USER_ID ? Number(REACT_APP_MOCK_USER_ID) : 1; // Imitar um usuário logado.

    const navigateBack = () => {

        const userWasRedirected = searchParams.get("redirected") !== null;

        if(userWasRedirected) {

            navigate("/tickets");

        } else {

            navigate(-1);

        }

    }

    const onConnect: frameCallbackType = useCallback( (frame: IFrame) => {
        
        if(stompClient.current !== null) {

            stompSubscription.current = stompClient.current.subscribe("/topic/public", onMessageReceived);

        }

    }, []);

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

        console.log("O Broker está reportando o seguinte erro: " + frame.headers['message']);

        console.log("Detalhes adicionais: " + frame.body);

    }, []);

    const onMessageReceived: messageCallbackType = (message: IMessage) => {

        if(message.body) {

            alert("Mensagem: " + message.body);

        } else {

            alert("Mensagem em branco");

        }

    }

    const sendMessage = (message: string) => {

        if(stompClient.current !== null) {

            const payload: TicketMessageRequestDTO = {
                message: message,
                ticketId: 1,
                senderId: mockUserID
            }

            stompClient.current.publish({destination: "/app/message", body: JSON.stringify(payload)});

        }

    }

    useEffect(() => {
        
        (() => {

            stompClient.current = new Client({ brokerURL: 'ws://localhost:8080/ws' });
    
            stompClient.current.onConnect = onConnect;
    
            stompClient.current.onStompError = onError;

            stompClient.current.activate();

            alert('Usuário conectado.');
    
        })()

        return () => onDisconnect();

    }, [onConnect, onDisconnect, onError])

    return (

        <Container>

            <Wrapper>

                <ViewTitle innerText="Todos Os Tickets" />

                <ClickableSpan 
                    onClick={navigateBack}
                    innerText="Voltar"
                />

            </Wrapper>

            <MessagesContainer data={data} />
            
            <InputComponentMessage 
                title="Escreva Sua Mensagem"
                placeholder="Digite aqui"
                onSubmitEvent={sendMessage}
            />

        </Container>

    );
    
}

export default ChatArea;