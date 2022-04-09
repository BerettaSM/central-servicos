import React from 'react';

import { Container } from './styles';

import { PriorityStatusInterface } from '../PriorityIcon';

const ColorBar: React.FC<PriorityStatusInterface> = (props) => {
    return (
        <Container priorityStatus={props.priorityStatus} />
    );
}

export default ColorBar;