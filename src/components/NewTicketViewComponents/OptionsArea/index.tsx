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
                    options={['Baixa', 'Média', 'Alta', 'Altíssima']}
                    renderColorBar={true}
                />
                <SelectBox
                    title='Classificação do Serviço'
                    options={['Suporte Operacional']}
                />
                <SelectBox
                    title='Responsável'
                    options={['Time de Sustentação A2',
                        'Time de Sustentação B1',
                        'Time de Sustentação C1']}
                />
            </Wrapper>
        </Container>
    );
}

export default OptionsArea;