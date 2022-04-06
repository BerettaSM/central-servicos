import React from 'react';

import { Container } from './styles';
import InputComponentLarge from '../../../components/shared/InputComponentLarge';

const DescriptionArea: React.FC = () => {
    return (
        <Container>
            <InputComponentLarge title='Descrição' />
        </Container>
    );
}

export default DescriptionArea;