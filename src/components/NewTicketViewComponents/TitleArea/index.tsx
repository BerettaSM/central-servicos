import React from 'react';

import ViewTitle from '../../../components/shared/ViewTitle';

import { Container } from './styles';

const TitleArea: React.FC = () => {

    return (

        <Container>

            <ViewTitle innerText="Criar Novo Ticket" />

        </Container>

    );
    
}

export default TitleArea;