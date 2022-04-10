import React from 'react';

import ViewTitle from '../../../components/shared/ViewTitle';

import { Container } from './styles';

const TitleArea: React.FC = () => {

    const TITLE_CREATE_NEW_TICKET = process.env.REACT_APP_TITLE_CREATE_NEW_TICKET;

    return (

        <Container>

            <ViewTitle innerText={TITLE_CREATE_NEW_TICKET} />

        </Container>

    );
    
}

export default TitleArea;