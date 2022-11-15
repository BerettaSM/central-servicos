import React from 'react';

import { Span } from './styles';

import {default as IClickableSpan} from '../Interfaces/ClickableSpan';

const ClickableSpan: React.FC<IClickableSpan> = ({onClick, innerText}) => {

    return (

        <Span onClick={onClick}>{innerText}</Span>

    );

}

export default ClickableSpan;