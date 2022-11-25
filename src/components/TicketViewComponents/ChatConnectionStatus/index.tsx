import React from 'react';
import { Container, Icon } from "./style";

import ChatConnection from '../../shared/Interfaces/ChatConnection';

const ChatConnectionStatus: React.FC<ChatConnection> = ({ connected }) => {

    return (

        <Container>

            <Icon connected={connected} />

            <span>{connected ? 'Conectado' : 'Desconectado'}</span>

        </Container>

    );

}

export default ChatConnectionStatus;