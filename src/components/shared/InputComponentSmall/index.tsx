import React from 'react';

import { Container, InputField, InputForm } from './styles';

import { InputComponent } from '../Interfaces/InputComponent';

const InputComponent_Small: React.FC<InputComponent> = (props) => {
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