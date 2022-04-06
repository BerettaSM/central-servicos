import React from 'react';

import { Container, InputField, InputForm } from './styles';

interface Props{
    title: string;
    placeholder: string;
}

const InputComponent_Small: React.FC<Props> = (props) => {
    return (
        <Container>
            <span>{props.title}</span>
            <InputField>
                <InputForm type='text' placeholder={props.placeholder}/>
            </InputField>
        </Container>
    );
}

export default InputComponent_Small;