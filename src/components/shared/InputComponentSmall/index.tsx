import React from 'react';

import {
    Container,
    InputField,
    InputForm
} from './styles';

import { InputComponentInterface } from '../Interfaces/InputComponentInterface';

const InputComponentSmall: React.FC<InputComponentInterface> = (props) => {

    return (
        <Container>

            <span>{props.title}</span>

            <InputField>

                <InputForm type='text' placeholder={props.placeholder}/>

            </InputField>

        </Container>

    );

}

export default InputComponentSmall;