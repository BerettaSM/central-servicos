import React from 'react';

import { Span } from './styles';

import { InnerText } from '../Interfaces/InnerText';

const ClickableSpan: React.FC<InnerText> = (props) => {

    return (

        <Span>{props.innerText}</Span>

    );

}

export default ClickableSpan;