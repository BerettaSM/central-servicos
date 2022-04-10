import React from 'react';

import {
    Box,
    Container
} from './styles';

import { DescriptionComponentInterface } from '../Interfaces/DescriptionComponentInterface';

const DescriptionComponentSmall: React.FC<DescriptionComponentInterface> = (props) => {

    return (

        <Container>

            <span>{props.title}</span>

            <Box>

                <span>{props.boxValue}</span>

            </Box>

        </Container>

    );

}

export default DescriptionComponentSmall;