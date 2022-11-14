import styled from 'styled-components';

export const Container = styled.div`
    background: none;
    height: calc(100% - 48px - 84px);
    width: 100%;

    position: relative;
    overflow-y: scroll;
    
    > div {
        margin-bottom: 12px;
    }
`;