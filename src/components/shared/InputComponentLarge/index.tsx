import React from 'react';

import { Container, InputField, InputForm } from './styles';

interface Props{
    title: string;
}

const InputComponent_Large: React.FC<Props> = (props) => {
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