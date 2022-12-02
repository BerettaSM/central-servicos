import React from 'react';

import { Span } from './styles';

import {default as IClickableSpan} from '../Interfaces/ClickableSpan';

const ClickableSpan: React.FC<IClickableSpan> = ({onClick, innerText, isDisabled}) => {


    if(isDisabled) {

        return (
        
            <Span isDisabled={isDisabled}>{innerText}</Span>
    
        );

    } else {

        return (
        
            <Span onClick={onClick}>{innerText}</Span>
    
        );

    }
    

}

export default ClickableSpan;