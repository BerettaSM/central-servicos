import React from 'react';

import { Icon } from './styles';

export interface PriorityStatusInterface {
    priorityStatus?: number;
}

const PriorityIcon: React.FC<PriorityStatusInterface> = (props) => {

    return <Icon priorityStatus={props.priorityStatus} />;

}

export default PriorityIcon;