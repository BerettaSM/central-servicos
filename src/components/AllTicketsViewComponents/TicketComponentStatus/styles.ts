import styled from 'styled-components';

import {  Clock } from 'styled-icons/bootstrap';

export const CurrentAttendantIcon = styled(Clock)`
    width: 14px;
`;

export const Container = styled.div`
    background: inherit;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width: 170px;

    
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: 3px 0;

    > span {
        margin-left: 6px;
    }
`;
