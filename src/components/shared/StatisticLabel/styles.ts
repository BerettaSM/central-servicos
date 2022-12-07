import styled from 'styled-components';

export const Label = styled.h3`
    font-weight: normal;
    margin-bottom: 1rem;

    > :first-child {
        color: var(--THEME_COLOR_001);
    }

    > :nth-child(2) {
        font-size: 20px;
        color: rgb(50, 50, 50);
    }
`;