import React from 'react';

import InputComponentLarge from '../../../components/shared/InputComponentLarge';
import { Container } from './styles';

const DescriptionArea: React.FC = () => {

    const { REACT_APP_TITLE_DESCRIPTION } = process.env;

    return (

        <Container>

            <InputComponentLarge title={REACT_APP_TITLE_DESCRIPTION} />

        </Container>

    );

}

export default DescriptionArea;