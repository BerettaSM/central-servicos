import React from 'react';

import { Container, MessageContainer } from './styles';
import MessageHeader from '../MessageHeader';

interface Props {
    outgoingMessage?: boolean;
}

const MessageTemplate: React.FC<Props> = (props) => {
    return (
        <Container outgoingMessage={props.outgoingMessage}>
            <MessageHeader />
            <MessageContainer>
                <span>
                     Lorem ipsum dolor sit amet,
                     consectetur adipiscing elit, 
                     sed do eiusmod tempor incididunt 
                     ut labore et dolore magna aliqua. 
                     Ut enim ad minim veniam, quis nostrud 
                     exercitation ullamco laboris nisi ut 
                     aliquip ex ea commodo consequat. 
                     Duis aute irure dolor in reprehenderit 
                     in voluptate velit esse cillum dolore 
                     eu fugiat nulla pariatur. Excepteur 
                     sint occaecat cupidatat non proident, 
                     sunt in culpa qui officia deserunt mollit 
                     anim id est laborum.
                </span>
            </MessageContainer>
        </Container>
    );
}

export default MessageTemplate;