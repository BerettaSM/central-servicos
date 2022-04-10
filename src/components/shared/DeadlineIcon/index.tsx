import React from 'react';

import { Icon } from './styles';

import { DeadlineStatusInterface } from '../Interfaces/DeadlineStatusInterface';

const DeadlineIcon: React.FC<DeadlineStatusInterface> = (props) => {

    return <Icon deadlineStatus={props.deadlineStatus} />;

}

export default DeadlineIcon;