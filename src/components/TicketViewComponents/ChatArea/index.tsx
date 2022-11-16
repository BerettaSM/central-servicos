import React from 'react';
import { useNavigate } from 'react-router-dom';

import ViewTitle from '../../../components/shared/ViewTitle';
import InputComponentMessage from '../../../components/shared/InputComponentMessage';
import ClickableSpan from '../../shared/ClickableSpan';


import { Container, Wrapper } from './styles';
import MessagesContainer from '../MessagesContainer';

const ChatArea: React.FC = () => {

    const navigate = useNavigate();

    return (

        <Container>

            <Wrapper>

                <ViewTitle innerText="Todos Os Tickets" />

                <ClickableSpan 
                    onClick={() => navigate(-1)}
                    innerText="Voltar"
                />

            </Wrapper>

            <MessagesContainer />
            
            <InputComponentMessage 
                title="Escreva Sua Mensagem"
                placeholder="Digite aqui"
            />

        </Container>

    );
    
}

export default ChatArea;