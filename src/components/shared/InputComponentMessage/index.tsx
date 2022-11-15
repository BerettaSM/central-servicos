import React from 'react';

import {
    Container,
    InputField,
    InputForm,
    PaperPlaneIcon
} from './styles';

import InputComponent from '../Interfaces/InputComponent';

const InputComponentMessage: React.FC<InputComponent> = ({ title, placeholder }) => {

    return (

        <Container>

            <span>{title}</span>

            <InputField>

                <InputForm type='text' placeholder={placeholder}/>

                <PaperPlaneIcon />

            </InputField>

        </Container>
        
    );
    
}

export default InputComponentMessage;