import React from 'react';

import { Container, InputField, InputForm, PaperPlaneIcon } from './styles';

import { InputComponent } from '../Interfaces/InputComponent';

const InputComponent_Message: React.FC<InputComponent> = (props) => {
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

export default InputComponent_Message;