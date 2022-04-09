import React from 'react';

import SelectBox from '../../../components/shared/SelectBox';
import InputComponentSmall from '../../../components/shared/InputComponentSmall';

import {
    Container,
    Wrapper
} from './styles';

const OptionsArea: React.FC = () => {

    const TITLE               = process.env.REACT_APP_TITLE;
    const TITLE_PRIORITY      = process.env.REACT_APP_TITLE_PRIORITY;
    const TITLE_SERVICE_TYPES = process.env.REACT_APP_TITLE_SERVICE_TYPES;
    const TITLE_RESPONSIBLE   = process.env.REACT_APP_TITLE_RESPONSIBLE;

    const prioritiesArray = [
        process.env.REACT_APP_PRIORITY_LOW,
        process.env.REACT_APP_PRIORITY_MEDIUM,
        process.env.REACT_APP_PRIORITY_HIGH,
        process.env.REACT_APP_PRIORITY_URGENT
    ];

    const servicesArray = [
        process.env.REACT_APP_SERVICE_OPERATIONAL_SUPPORT
    ];

    const teamsArray = [
        process.env.REACT_APP_TEAM_A2,
        process.env.REACT_APP_TEAM_B1,
        process.env.REACT_APP_TEAM_C1
    ];
    
    return (

        <Container>

            <Wrapper>

                <InputComponentSmall title={TITLE} placeholder={TITLE} />

                <SelectBox
                    title={TITLE_PRIORITY}
                    options={prioritiesArray}
                    renderColorBar={true}
                />

                <SelectBox
                    title={TITLE_SERVICE_TYPES}
                    options={servicesArray}
                />

                <SelectBox
                    title={TITLE_RESPONSIBLE}
                    options={teamsArray}
                />

            </Wrapper>

        </Container>

    );
    
}

export default OptionsArea;