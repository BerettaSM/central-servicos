import React from 'react';

import { Icon } from './styles';

import PriorityStatus from '../Interfaces/PriorityStatus';

const PriorityIcon: React.FC<PriorityStatus> = ({ priorityStatus }) => {
    
    return <Icon priorityStatus={priorityStatus} />;

}

export default PriorityIcon;