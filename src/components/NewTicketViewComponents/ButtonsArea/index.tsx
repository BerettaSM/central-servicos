import React from 'react';
import { Link } from 'react-router-dom';

import { Container } from './styles';
import AddButton from '../../../components/shared/AddButton';
import CancelButton from '../../../components/shared/CancelButton';

const ButtonsArea: React.FC = () => {
    return (
        <Container>
            <Link to={'/tickets'} style={{ textDecoration: 'none'}} >
                <CancelButton innerText='Cancelar' />
            </Link>
            <AddButton innerText='Abrir Ticket' />
        </Container>
    );
}

export default ButtonsArea;