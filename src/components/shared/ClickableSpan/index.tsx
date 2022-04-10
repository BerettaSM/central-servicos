import React from 'react';

import { Span } from './styles';

import { ClickableSpanInterface } from '../Interfaces/ClickableSpanInterface';

const ClickableSpan: React.FC<ClickableSpanInterface> = (props) => {

    return (

        <Span onClick={props.onClick}>{props.innerText}</Span>

    );

}

export default ClickableSpan;