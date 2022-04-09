import React from 'react';

import InputComponentLarge from '../../../components/shared/InputComponentLarge';
import { Container } from './styles';

const DescriptionArea: React.FC = () => {

    const TITLE_DESCRIPTION = process.env.REACT_APP_TITLE_DESCRIPTION;

    return (

        <Container>

            <InputComponentLarge title={TITLE_DESCRIPTION} />

        </Container>

    );

}

export default DescriptionArea;