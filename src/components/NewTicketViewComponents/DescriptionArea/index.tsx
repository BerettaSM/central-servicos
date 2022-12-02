import React from 'react';

import InputComponentLarge from '../../../components/shared/InputComponentLarge';
import { Container } from './styles';

import UpdateNewTicket from '../../shared/Interfaces/UpdateNewTicket';

const DescriptionArea: React.FC<UpdateNewTicket> = ({ newTicketState }) => {

    return (

        <Container>

            <InputComponentLarge
                title="Descrição"
                newTicketState={newTicketState}
                propertyToUpdate='description'
            />

        </Container>

    );

}

export default DescriptionArea;