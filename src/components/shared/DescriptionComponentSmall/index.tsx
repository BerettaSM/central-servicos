import React from 'react';

import {
    Box,
    Container
} from './styles';

import DescriptionComponent from '../Interfaces/DescriptionComponent';

const DescriptionComponentSmall: React.FC<DescriptionComponent> = ({ title, boxValue }) => {

    return (

        <Container>

            <span>{title}</span>

            <Box>

                <span>{boxValue}</span>

            </Box>

        </Container>

    );

}

export default DescriptionComponentSmall;