import React from 'react';

import InputComponentLarge from '../../../components/shared/InputComponentLarge';
import { Container } from './styles';

import UpdateNewTicket from '../../shared/Interfaces/UpdateNewTicket';

const DescriptionArea: React.FC<UpdateNewTicket> = ({ newTicketState }) => {

    const { REACT_APP_TITLE_DESCRIPTION } = process.env;

    return (

        <Container>

            <InputComponentLarge
                title={REACT_APP_TITLE_DESCRIPTION}
                newTicketState={newTicketState}
                propertyToUpdate='description'
            />

        </Container>

    );

}

export default DescriptionArea;