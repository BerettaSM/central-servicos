import React from 'react';

import {
    Box,
    Container
} from './styles';

import { DescriptionComponent } from '../Interfaces/DescriptionComponent';

const DescriptionComponentSmall: React.FC<DescriptionComponent> = (props) => {

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