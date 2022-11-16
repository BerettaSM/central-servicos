import React, { useEffect, useState } from 'react';

import SelectBox from '../../../components/shared/SelectBox';
import InputComponentSmall from '../../../components/shared/InputComponentSmall';

import { Container, Wrapper } from './styles';

import { Api } from '../../../Api';

import NewTicketOptions from '../../shared/Interfaces/NewTicketOptions';

import UpdateNewTicket from '../../shared/Interfaces/UpdateNewTicket';

const OptionsArea: React.FC<UpdateNewTicket> = ({ newTicketState }) => {

    const [data, setData] = useState<NewTicketOptions>();
    
    useEffect(() => {

        const gatherData = async () => {

            const endpoints = {'classification': [], 'area': []};

            for(const endpoint of Object.keys(endpoints)) {
                
                if(endpoint !== 'classification' && endpoint !== 'area')
                    throw new Error(`${endpoint} não é um endpoint válido.`);

                await Api.get(`/api/${endpoint}`)

                    .then((res: any) => {

                        let results = res.data;

                        if(results)

                            endpoints[endpoint] = results;

                    })

                    .catch((error: any) => {

                        console.error(error);

                    })

            }
            
            setData(endpoints);

        }

        (async () => {

            gatherData();

        })()

    }, [])

    const prioritiesArray = [
        {id: null, description: 'Baixa'},
        {id: null, description: 'Média'},
        {id: null, description: 'Alta'},
        {id: null, description: 'Altíssima'}
    ];
    
    return (

        <Container>

            <Wrapper>

                <InputComponentSmall
                    title="Título"
                    placeholder="Título"
                    newTicketState={newTicketState}
                    propertyToUpdate='title'
                />

                <SelectBox
                    title="Prioridade"
                    options={prioritiesArray}
                    renderColorBar={true}
                    newTicketState={newTicketState}
                    propertyToUpdate='priority'
                />
       
                <SelectBox
                    title="Classificação Do Serviço"
                    options={data?.classification}
                    newTicketState={newTicketState}
                    propertyToUpdate='classificationId'
                />

                <SelectBox
                    title="Responsável"
                    options={data?.area}
                    newTicketState={newTicketState}
                    propertyToUpdate='areaId'
                />

            </Wrapper>

        </Container>

    );
    
}

export default OptionsArea;