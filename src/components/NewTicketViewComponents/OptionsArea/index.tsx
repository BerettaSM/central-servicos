import React from 'react';

import SelectBox from '../../../components/shared/SelectBox';
import InputComponentSmall from '../../../components/shared/InputComponentSmall';

import {
    Container,
    Wrapper
} from './styles';

const OptionsArea: React.FC = () => {

    const {
        REACT_APP_PRIORITY_LOW,
        REACT_APP_PRIORITY_MEDIUM,
        REACT_APP_PRIORITY_HIGH,
        REACT_APP_PRIORITY_URGENT,
        REACT_APP_SERVICE_OPERATIONAL_SUPPORT,
        REACT_APP_TEAM_A2,
        REACT_APP_TEAM_B1,
        REACT_APP_TEAM_C1,
        REACT_APP_TITLE,
        REACT_APP_TITLE_PRIORITY,
        REACT_APP_TITLE_SERVICE_TYPES,
        REACT_APP_TITLE_RESPONSIBLE
    } = process.env;

    const prioritiesArray = [
        REACT_APP_PRIORITY_LOW,
        REACT_APP_PRIORITY_MEDIUM,
        REACT_APP_PRIORITY_HIGH,
        REACT_APP_PRIORITY_URGENT
    ];

    const servicesArray = [
        REACT_APP_SERVICE_OPERATIONAL_SUPPORT
    ];

    const teamsArray = [
        REACT_APP_TEAM_A2,
        REACT_APP_TEAM_B1,
        REACT_APP_TEAM_C1
    ];
    
    return (

        <Container>

            <Wrapper>

                <InputComponentSmall
                    title={REACT_APP_TITLE}
                    placeholder={REACT_APP_TITLE}
                />

                <SelectBox
                    title={REACT_APP_TITLE_PRIORITY}
                    options={prioritiesArray}
                    renderColorBar={true}
                />

                <SelectBox
                    title={REACT_APP_TITLE_SERVICE_TYPES}
                    options={servicesArray}
                />

                <SelectBox
                    title={REACT_APP_TITLE_RESPONSIBLE}
                    options={teamsArray}
                />

            </Wrapper>

        </Container>

    );
    
}

export default OptionsArea;