import React, { useState } from 'react';

import TitleArea from '../../components/NewTicketViewComponents/TitleArea';
import OptionsArea from '../../components/NewTicketViewComponents/OptionsArea';
import DescriptionArea from '../../components/NewTicketViewComponents/DescriptionArea';
import ButtonsArea from '../../components/NewTicketViewComponents/ButtonsArea';

import { Grid } from './styles';

import TicketRequestDTO from '../../components/shared/Interfaces/TicketRequestDTO';

const NewTicketView: React.FC = () => {

    

    return (

        <Grid>

            <TitleArea />

            <OptionsArea />

            <DescriptionArea />

            <ButtonsArea />

        </Grid>

    );
    
}

export default NewTicketView;