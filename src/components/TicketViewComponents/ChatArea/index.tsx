import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import useChat from '../../../hooks/useChat';

import { Container, Wrapper } from './styles';

import ViewTitle from '../../../components/shared/ViewTitle';
import InputComponentMessage from '../../../components/shared/InputComponentMessage';
import ClickableSpan from '../../shared/ClickableSpan';
import MessagesContainer from '../MessagesContainer';
import ChatConnectionStatus from '../ChatConnectionStatus';

import TicketData from '../../shared/Interfaces/TicketData';

const ChatArea: React.FC<TicketData> = ({ data }) => {

    const ticketId = data?.ticketId;

    const [ messages, sendTicketMessage, chatConnected ] = useChat(ticketId);

    const navigate = useNavigate();

    const searchParams = useSearchParams()[0];

    const navigateBack = () => {

        const userWasRedirected = searchParams.get("redirected") !== null;

        if(userWasRedirected) {

            navigate("/tickets");

        } else {

            navigate(-1);

        }

    }

    return (

        <Container>

            <Wrapper>

                <ViewTitle innerText="Todos Os Tickets" />

                <ChatConnectionStatus connected={chatConnected} />

                <ClickableSpan 
                    onClick={navigateBack}
                    innerText="Voltar"
                />

            </Wrapper>

            <MessagesContainer messages={messages} />
            
            <InputComponentMessage 
                title="Escreva Sua Mensagem"
                placeholder="Digite aqui"
                onSubmitEvent={sendTicketMessage}
            />

        </Container>

    );
    
}

export default ChatArea;