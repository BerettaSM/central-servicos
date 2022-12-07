import React from 'react';

import { Label } from './styles';

interface Statistic {
    label: string;
    data: string;
    dataColor?: string;
}

const StatisticLabel: React.FC<Statistic> = ({ label, data, dataColor }) => {

    return (

        <Label>

            <span>{label}: </span>

            <span style={{ color: dataColor }}>{data}</span>

        </Label>

    );

}

export default StatisticLabel;