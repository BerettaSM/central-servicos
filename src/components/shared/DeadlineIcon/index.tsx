import React from 'react';

import { Icon } from './styles';

import { DeadlineStatus } from '../Interfaces/DeadlineStatus';

const DeadlineIcon: React.FC<DeadlineStatus> = (props) => {

    return <Icon deadlineStatus={props.deadlineStatus} />;

}

export default DeadlineIcon;