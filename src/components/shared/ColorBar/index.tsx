import React from 'react';

import { Container } from './styles';

import { PriorityStatus } from '../Interfaces/PriorityStatus';

const ColorBar: React.FC<PriorityStatus> = (props) => {

    return (

        <Container priorityStatus={props.priorityStatus} />

    );
    
}

export default ColorBar;