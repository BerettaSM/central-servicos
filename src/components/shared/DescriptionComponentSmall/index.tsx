import React from 'react';

import { Box, Container } from './styles';

interface DCSInterface{
    title?: string;
    boxValue?: string;
}

const DescriptionComponent_Small: React.FC<DCSInterface> = (props) => {
    return (
        <Container>
            <span>{props.title}</span>
            <Box>
                <span>{props.boxValue}</span>
            </Box>
        </Container>
    );
}

export default DescriptionComponent_Small;