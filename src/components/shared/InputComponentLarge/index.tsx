import React from 'react';

import {
    Container,
    InputField,
    InputForm
} from './styles';

import { InputComponentInterface } from '../Interfaces/InputComponentInterface';

const InputComponentLarge: React.FC<InputComponentInterface> = (props) => {

    return (

        <Container>

            <span>{props.title}</span>

            <InputField>

                <InputForm />

            </InputField>

        </Container>

    );
    
}

export default InputComponentLarge;