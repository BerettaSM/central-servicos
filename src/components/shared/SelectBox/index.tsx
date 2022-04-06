import React from 'react';

import { Container, Wrapper } from './styles';
import ColorBar from '../ColorBar';

interface Props{
    title: string;
    opts: Array<String>;
    renderColorBar?: boolean;
}

const SelectBox: React.FC<Props> = (props) => {
    return (
        <Container>
            <Wrapper>
                <span>{props.title}</span>
                {props.renderColorBar && <ColorBar />}
            </Wrapper>
            <select>
                {props.opts.map((option, idx) => <option value={idx}>{option}</option>)}
            </select>
        </Container>
    );
}

export default SelectBox;