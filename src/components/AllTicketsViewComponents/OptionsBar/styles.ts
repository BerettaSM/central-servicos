import styled from 'styled-components';

export const Container = styled.div`
    grid-area: OB;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    margin-right: 12px;
    z-index: 1;
    
    
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    
    > div:nth-child(2) {
        margin: 0 6px;
    }

    > a {
        text-decoration: none;
    }
`;
