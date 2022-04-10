import React from 'react';
import { Link } from 'react-router-dom';

import AddButton from '../../../components/shared/AddButton';
import CancelButton from '../../../components/shared/CancelButton';
import { Container } from './styles';

const ButtonsArea: React.FC = () => {

    const ACTION_CANCEL     = process.env.REACT_APP_ACTION_CANCEL;
    const ACTION_NEW_TICKET = process.env.REACT_APP_ACTION_NEW_TICKET;

    return (

        <Container>

            <Link to={'/tickets'}>

                <CancelButton innerText={ACTION_CANCEL} />

            </Link>

            <AddButton innerText={ACTION_NEW_TICKET} />

        </Container>

    );
    
}

export default ButtonsArea;