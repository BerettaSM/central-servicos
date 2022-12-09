import React, { useState } from 'react';

import TitleArea from '../../components/NewTicketViewComponents/TitleArea';
import OptionsArea from '../../components/NewTicketViewComponents/OptionsArea';
import DescriptionArea from '../../components/NewTicketViewComponents/DescriptionArea';
import ButtonsArea from '../../components/NewTicketViewComponents/ButtonsArea';

import { Grid } from './styles';

import TicketRequestDTO from '../../components/shared/Interfaces/TicketRequestDTO';
import { useUser } from '../../auth';

const NewTicketView: React.FC = () => {

    const user = useUser();

    const [newTicket, setNewTicket] = useState<TicketRequestDTO>({
        title: '',
        description: '',
        priority: 'Baixa',
        userId: user.data.userId,
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