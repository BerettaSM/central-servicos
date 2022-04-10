import React from 'react';

import { Span } from './styles';

import { InnerTextInterface } from '../Interfaces/InnerTextInterface';

const ClickableSpan: React.FC<InnerTextInterface> = (props) => {

    return (

        <Span>{props.innerText}</Span>

    );

}

export default ClickableSpan;