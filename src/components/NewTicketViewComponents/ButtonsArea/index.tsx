import React from 'react';
import { Link } from 'react-router-dom';

import AddButton from '../../../components/shared/AddButton';
import CancelButton from '../../../components/shared/CancelButton';
import { Container } from './styles';

const ButtonsArea: React.FC = () => {

    const {
        REACT_APP_ACTION_CANCEL,
        REACT_APP_ACTION_NEW_TICKET
    } = process.env;

    return (

        <Container>

            <Link to={'/tickets'}>

                <CancelButton innerText={REACT_APP_ACTION_CANCEL} />

            </Link>

            <AddButton innerText={REACT_APP_ACTION_NEW_TICKET} />

        </Container>

    );
    
}

export default ButtonsArea;