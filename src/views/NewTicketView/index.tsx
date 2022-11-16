import React, { useState } from 'react';

import TitleArea from '../../components/NewTicketViewComponents/TitleArea';
import OptionsArea from '../../components/NewTicketViewComponents/OptionsArea';
import DescriptionArea from '../../components/NewTicketViewComponents/DescriptionArea';
import ButtonsArea from '../../components/NewTicketViewComponents/ButtonsArea';

import { Grid } from './styles';

import TicketRequestDTO from '../../components/shared/Interfaces/TicketRequestDTO';

const NewTicketView: React.FC = () => {

    const mockUserID = 1; // Imitar um usuário logado.

    const [newTicket, setNewTicket] = useState<TicketRequestDTO>({
        title: '',
        description: '',
        priority: 'Baixa',
        userId: mockUserID,
        classificationId: 1,
        areaId: 1
    });
    
    return (

        <Grid>

            <TitleArea />

            <OptionsArea newTicketState={[newTicket, setNewTicket]} />

            <DescriptionArea newTicketState={[newTicket, setNewTicket]} />

            <ButtonsArea newTicketState={[newTicket, setNewTicket]} />

        </Grid>

    );
    
}

export default NewTicketView;