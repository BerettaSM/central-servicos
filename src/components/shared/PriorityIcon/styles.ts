import styled from 'styled-components';

import { CircleFill } from 'styled-icons/bootstrap';

import { PriorityStatusInterface } from '../Interfaces/PriorityStatusInterface';

export const Icon = styled(CircleFill)<PriorityStatusInterface>`
    width: 14px;

    ${(p: PriorityStatusInterface) => {

        const status = p.priorityStatus;

        switch(status) {

            case "Baixa":
                return `color: var(--PRIORITY_LOW);`;

            case "Média":
                return `color: var(--PRIORITY_MEDIUM);`;

            case "Alta":
                return `color: var(--PRIORITY_HIGH);`;

            case "Altíssima":
                return `color: var(--PRIORITY_URGENT);`;
                
        }

    }};

`;
