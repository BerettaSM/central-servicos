import React from 'react';

import {
    Container,
    InputField,
    InputForm
} from './styles';

import InputComponent from '../Interfaces/InputComponent';

const InputComponentSmall: React.FC<InputComponent> = ({ title, placeholder }) => {

    return (
        <Container>

            <span>{title}</span>

            <InputField>

                <InputForm type='text' placeholder={placeholder}/>

            </InputField>

        </Container>

    );

}

export default InputComponentSmall;