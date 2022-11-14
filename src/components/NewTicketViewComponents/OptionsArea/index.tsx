import React, { useEffect, useState } from 'react';

import SelectBox from '../../../components/shared/SelectBox';
import InputComponentSmall from '../../../components/shared/InputComponentSmall';

import { Container, Wrapper } from './styles';

import { Api } from '../../../Api';

import { NewTicketOptionsAreaInterface } from '../../shared/Interfaces/NewTicketOptionsAreaInterface';

const OptionsArea: React.FC = () => {

    const [data, setData] = useState<NewTicketOptionsAreaInterface>();
    
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

    const {
        REACT_APP_TITLE,
        REACT_APP_TITLE_PRIORITY,
        REACT_APP_TITLE_SERVICE_TYPES,
        REACT_APP_TITLE_RESPONSIBLE
    } = process.env;

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
                    title={REACT_APP_TITLE}
                    placeholder={REACT_APP_TITLE}
                />

                <SelectBox
                    title={REACT_APP_TITLE_PRIORITY ?? "Placeholder"}
                    options={prioritiesArray}
                    renderColorBar={true}
                />
       
                <SelectBox
                    title={REACT_APP_TITLE_SERVICE_TYPES ?? "Placeholder"}
                    options={data?.classification}
                />

                <SelectBox
                    title={REACT_APP_TITLE_RESPONSIBLE ?? "Placeholder"}
                    options={data?.area}
                />

            </Wrapper>

        </Container>

    );
    
}

export default OptionsArea;