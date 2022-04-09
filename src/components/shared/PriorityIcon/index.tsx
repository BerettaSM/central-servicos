import React from 'react';

import { Icon } from './styles';

import { PriorityStatus } from '../Interfaces/PriorityStatus';

const PriorityIcon: React.FC<PriorityStatus> = (props) => {

    return <Icon priorityStatus={props.priorityStatus} />;

}

export default PriorityIcon;