import React from 'react';

import { Grid } from './styles';
import TitleArea from '../../components/NewTicketViewComponents/TitleArea';
import OptionsArea from '../../components/NewTicketViewComponents/OptionsArea';
import DescriptionArea from '../../components/NewTicketViewComponents/DescriptionArea';
import ButtonsArea from '../../components/NewTicketViewComponents/ButtonsArea';

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