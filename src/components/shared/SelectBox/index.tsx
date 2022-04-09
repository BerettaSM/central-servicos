import React from 'react';

import { Container, Wrapper } from './styles';
import ColorBar from '../ColorBar';

interface SelectBoxInterface{
    title: string;
    options: Array<String>;
    renderColorBar?: boolean;
}

const SelectBox: React.FC<SelectBoxInterface> = (props) => {
    return (
        <Container>
            <Wrapper>
                <span>{props.title}</span>
                {props.renderColorBar && <ColorBar />}
            </Wrapper>
            <select>
                {props.options.map((option, idx) => <option key={idx} value={idx}>{option}</option>)}
            </select>
        </Container>
    );
}

export default SelectBox;