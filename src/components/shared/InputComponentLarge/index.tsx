import React from 'react';

import { Container, InputField, InputForm } from './styles';

import { InputComponent } from '../Interfaces/InputComponent';

const InputComponent_Large: React.FC<InputComponent> = (props) => {
    return (
        <Container>
            <span>{props.title}</span>
            <InputField>
                <InputForm />
            </InputField>
        </Container>
    );
}

export default InputComponent_Large;