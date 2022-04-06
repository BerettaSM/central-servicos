import styled from 'styled-components';

import { MessageInterface } from '.';

export const Container = styled.div<MessageInterface>`
    background: var(--THEME_COLOR_003);
    color: var(--THEME_COLOR_005);
    font-size: 14px;
    padding: 12px;
    width: calc(100% - 63px);

    ${(p: MessageInterface) => {
        if(p.outgoingMessage) {
            return `
                margin-left: 63px;
                border-right: 3px solid var(--THEME_COLOR_004);
                border-radius: 8px 0 0 8px;
            `;
        } else {
            return `
                margin-right: 63px;
                border-left: 3px solid var(--THEME_COLOR_001);
                border-radius: 0 8px 8px 0;
            `;
        }
    }};
    
`;

export const MessageContainer = styled.div`
    margin: 18px 0 14px 47px;
`;
