import styled from 'styled-components';

export const Container = styled.div`
    grid-area: BA;
    
    display: flex;
    flex-direction: row;
    
    border-top: 1px solid var(--THEME_COLOR_001);
    padding-top: 35px;
    
    > :first-child {
        margin-right: 10px;
    }
`;
