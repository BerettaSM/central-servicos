import React from 'react';

import {
    Container,
    InputField,
    InputForm
} from './styles';

import InputComponent from '../Interfaces/InputComponent';

const InputComponentLarge: React.FC<InputComponent> = ({ title }) => {

    return (

        <Container>

            <span>{title}</span>

            <InputField>

                <InputForm />

            </InputField>

        </Container>

    );
    
}

export default InputComponentLarge;