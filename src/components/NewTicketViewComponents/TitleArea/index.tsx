import React from 'react';

import ViewTitle from '../../../components/shared/ViewTitle';

import { Container } from './styles';

const TitleArea: React.FC = () => {

    const { REACT_APP_TITLE_CREATE_NEW_TICKET } = process.env;

    return (

        <Container>

            <ViewTitle innerText={REACT_APP_TITLE_CREATE_NEW_TICKET} />

        </Container>

    );
    
}

export default TitleArea;