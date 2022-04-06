import React from 'react';

import { Container, InputField, InputForm, PaperPlaneIcon } from './styles';

interface Props{
    title?: string;
    placeholder?: string;
}

const InputComponent_Message: React.FC<Props> = (props) => {
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