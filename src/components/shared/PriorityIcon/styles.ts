import styled from 'styled-components';

import { CircleFill } from 'styled-icons/bootstrap';

import PriorityStatus from '../Interfaces/PriorityStatus';

export const Icon = styled(CircleFill)<PriorityStatus>`
    width: 14px;

    ${(p: PriorityStatus) => {

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
