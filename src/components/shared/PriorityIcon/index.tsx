import React from 'react';

import { Icon } from './styles';

import { PriorityStatusInterface } from '../Interfaces/PriorityStatusInterface';

const PriorityIcon: React.FC<PriorityStatusInterface> = (props) => {
    
    return <Icon priorityStatus={props.priorityStatus} />;

}

export default PriorityIcon;