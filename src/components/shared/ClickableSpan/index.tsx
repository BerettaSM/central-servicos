import React from 'react';

import { Span } from './styles';

import {default as IClickableSpan} from '../Interfaces/ClickableSpan';

const ClickableSpan: React.FC<IClickableSpan> = ({onClick, innerText, isDisabled, negativeColor}) => {


    if(isDisabled) {

        return (
        
            <Span isDisabled={isDisabled} negativeColor={negativeColor}>{innerText}</Span>
    
        );

    } else {

        return (
        
            <Span onClick={onClick} negativeColor={negativeColor}>{innerText}</Span>
    
        );

    }
    

}

export default ClickableSpan;