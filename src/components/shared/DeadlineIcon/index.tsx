import React from 'react';

import { Icon } from './styles';

export interface DeadlineStatusInterface {
    deadlineStatus?: number;
}

const DeadlineIcon: React.FC<DeadlineStatusInterface> = (props) => {

    return <Icon deadlineStatus={props.deadlineStatus} />;

}

export default DeadlineIcon;