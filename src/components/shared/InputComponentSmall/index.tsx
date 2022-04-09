import React from 'react';

import {
    Container,
    InputField,
    InputForm
} from './styles';

import { InputComponent } from '../Interfaces/InputComponent';

const InputComponentSmall: React.FC<InputComponent> = (props) => {

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