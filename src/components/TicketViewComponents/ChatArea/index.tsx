import React from 'react';

import { Container, Wrapper, MessagesContainer } from './styles';
import ViewTitle from '../../../components/shared/ViewTitle';
import InputComponentMessage from '../../../components/shared/InputComponentMessage';
import MessageTemplate from '../MessageTemplate';

import { Link } from 'react-router-dom';

const ChatArea: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <ViewTitle innerText='Todos os Tickets'/>
                <Link to={'/tickets'} style={{ textDecoration: 'none'}} >
                    <span>Voltar</span>
                </Link>
            </Wrapper>
            <MessagesContainer>
                <MessageTemplate />
                <MessageTemplate outgoingMessage={true}/>
                <MessageTemplate />
            </MessagesContainer>
            <InputComponentMessage 
                title='Escreva sua Mensagem'
                placeholder='Pesquisar Ticket'
            />
        </Container>
    );
}

export default ChatArea;