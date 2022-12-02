import React from 'react';

import { Container } from './styles';

import PriorityStatus from '../Interfaces/PriorityStatus';

const ColorBar: React.FC<PriorityStatus> = ({ priorityStatus }) => {
    
    return (

        <Container priorityStatus={priorityStatus} />

    );
    
}

export default ColorBar;