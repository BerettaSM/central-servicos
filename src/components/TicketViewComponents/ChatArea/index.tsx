import React from 'react';
import { useNavigate } from 'react-router-dom';

import ViewTitle from '../../../components/shared/ViewTitle';
import InputComponentMessage from '../../../components/shared/InputComponentMessage';
import ClickableSpan from '../../shared/ClickableSpan';
import MessageTemplate from '../MessageTemplate';

import {
    Container,
    Wrapper,
    MessagesContainer
} from './styles';

const ChatArea: React.FC = () => {

    const navigate = useNavigate();

    const {
        REACT_APP_TITLE_ALL_TICKETS,
        REACT_APP_ACTION_RETURN,
        REACT_APP_TITLE_WRITE_YOUR_MESSAGE,
        REACT_APP_ACTION_SEARCH_TICKET
    } = process.env;
    
    return (

        <Container>

            <Wrapper>

                <ViewTitle innerText={REACT_APP_TITLE_ALL_TICKETS} />

                <ClickableSpan 
                    onClick={() => navigate(-1)}
                    innerText={REACT_APP_ACTION_RETURN}
                />

            </Wrapper>

            <MessagesContainer>

                <MessageTemplate />

                <MessageTemplate outgoingMessage={true}/>

                <MessageTemplate />

            </MessagesContainer>
            
            <InputComponentMessage 
                title={REACT_APP_TITLE_WRITE_YOUR_MESSAGE}
                placeholder={REACT_APP_ACTION_SEARCH_TICKET}
            />

        </Container>

    );
    
}

export default ChatArea;