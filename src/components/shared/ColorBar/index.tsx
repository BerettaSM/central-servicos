import React from 'react';

import { Container } from './styles';

import { PriorityStatusInterface } from '../Interfaces/PriorityStatusInterface';

const ColorBar: React.FC<PriorityStatusInterface> = (props) => {

    return (

        <Container priorityStatus={props.priorityStatus} />

    );
    
}

export default ColorBar;