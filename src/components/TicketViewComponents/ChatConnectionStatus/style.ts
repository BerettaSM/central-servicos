import styled from "styled-components";
import { CircleFill } from 'styled-icons/bootstrap';

import ChatConnection from "../../shared/Interfaces/ChatConnection";

export const Container = styled.div`
    align-items: center;
    color: var(--THEME_COLOR_001);
    display: flex;
    flex-direction: row;
`;

export const Icon = styled(CircleFill)<ChatConnection>`
    margin-right: 5px;
    width: 14px;

    ${(chat: ChatConnection) => {

        if(chat.connected) {

            return `color: var(--CONNECTED);`;

        } else {

            return `color: var(--DISCONNECTED);`;

        }

    }};

`;