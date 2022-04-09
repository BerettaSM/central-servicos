import React from 'react';
import { Link } from 'react-router-dom';

import ViewTitle from '../../../components/shared/ViewTitle';
import InputComponentMessage from '../../../components/shared/InputComponentMessage';
import MessageTemplate from '../MessageTemplate';

import {
    Container,
    Wrapper,
    MessagesContainer
} from './styles';

const ChatArea: React.FC = () => {

    const TITLE_ALL_TICKETS        = process.env.REACT_APP_TITLE_ALL_TICKETS;
    const TITLE_WRITE_YOUR_MESSAGE = process.env.REACT_APP_TITLE_WRITE_YOUR_MESSAGE;
    const ACTION_SEARCH_TICKET     = process.env.REACT_APP_ACTION_SEARCH_TICKET;
    const ACTION_RETURN            = process.env.REACT_APP_ACTION_RETURN;

    return (

        <Container>

            <Wrapper>

                <ViewTitle innerText={TITLE_ALL_TICKETS} />

                <Link to={'/tickets'} style={{ textDecoration: 'none'}} >

                    <span>{ACTION_RETURN}</span>

                </Link>

            </Wrapper>

            <MessagesContainer>

                <MessageTemplate />

                <MessageTemplate outgoingMessage={true}/>

                <MessageTemplate />

            </MessagesContainer>
            
            <InputComponentMessage 
                title={TITLE_WRITE_YOUR_MESSAGE}
                placeholder={ACTION_SEARCH_TICKET}
            />

        </Container>

    );
    
}

export default ChatArea;