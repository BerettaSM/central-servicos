import React from 'react';

import { Container, Wrapper } from './styles';
import SelectBox from '../../../components/shared/SelectBox';
import InputComponentSmall from '../../../components/shared/InputComponentSmall';

const OptionsArea: React.FC = () => {
    return (
        <Container>
            <Wrapper>
                <InputComponentSmall title='Título' placeholder='Título' />
                <SelectBox
                    title='Prioridade'
                    opts={['Baixa', 'Média', 'Alta', 'Altíssima']}
                    renderColorBar={true}
                />
                <SelectBox
                    title='Classificação do Serviço'
                    opts={['Suporte Operacional']}
                />
                <SelectBox
                    title='Responsável'
                    opts={['Time de Sustentação A2',
                        'Time de Sustentação B1',
                        'Time de Sustentação C1']}
                />
            </Wrapper>
        </Container>
    );
}

export default OptionsArea;