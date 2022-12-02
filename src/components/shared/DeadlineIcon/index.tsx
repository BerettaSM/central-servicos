import React from 'react';

import { Icon } from './styles';

import DeadlineStatus from '../Interfaces/DeadlineStatus';

const DeadlineIcon: React.FC<DeadlineStatus> = ({ deadlineStatus }) => {

    return <Icon deadlineStatus={deadlineStatus} />;

}

export default DeadlineIcon;