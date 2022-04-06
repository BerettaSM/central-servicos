import React from 'react';

import { Container } from './styles';
import ViewTitle from '../../../components/shared/ViewTitle';

const TitleArea: React.FC = () => {
    return (
        <Container>
            <ViewTitle innerText='Criar Novo Ticket' />
        </Container>
    );
}

export default TitleArea;