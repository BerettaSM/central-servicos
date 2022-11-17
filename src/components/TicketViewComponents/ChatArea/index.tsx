import React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import ViewTitle from '../../../components/shared/ViewTitle';
import InputComponentMessage from '../../../components/shared/InputComponentMessage';
import ClickableSpan from '../../shared/ClickableSpan';


import { Container, Wrapper } from './styles';
import MessagesContainer from '../MessagesContainer';

const ChatArea: React.FC = () => {

    const searchParams = useSearchParams()[0];

    const navigate = useNavigate();

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

                <ClickableSpan 
                    onClick={navigateBack}
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