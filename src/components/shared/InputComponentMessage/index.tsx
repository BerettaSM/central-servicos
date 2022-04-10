import React from 'react';

import {
    Container,
    InputField,
    InputForm,
    PaperPlaneIcon
} from './styles';

import { InputComponentInterface } from '../Interfaces/InputComponentInterface';

const InputComponentMessage: React.FC<InputComponentInterface> = (props) => {

    return (

        <Container>

            <span>{props.title}</span>

            <InputField>

                <InputForm type='text' placeholder={props.placeholder}/>

                <PaperPlaneIcon />

            </InputField>

        </Container>
        
    );
    
}

export default InputComponentMessage;