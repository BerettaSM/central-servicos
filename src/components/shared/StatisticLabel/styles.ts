import styled from 'styled-components';

export const Label = styled.span`
    display: block;
    font-weight: normal;
    margin-bottom: 1rem;

    > :first-child {
        color: var(--THEME_COLOR_001);
    }

    > :nth-child(2) {
        color: rgb(50, 50, 50);
    }
`;