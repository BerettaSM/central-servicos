import React from 'react';

import {
    Container,
    InputField,
    InputForm,
    PaperPlaneIcon
} from './styles';

import InputComponent from '../Interfaces/InputComponent';

const InputComponentMessage: React.FC<InputComponent> = ({ title, placeholder, onSubmitEvent }) => {

    const onEnterDown = (e: React.KeyboardEvent) => {
        
        if(e.key === 'Enter') {

            console.log('Apertei o enter')
            
        }

    }

    return (

        <Container>

            <span>{title}</span>

            <InputField>

                <InputForm type='text' placeholder={placeholder} onKeyDown={onEnterDown}/>

                <button onClick={() => console.log('oi')}>

                    <PaperPlaneIcon />

                </button>

            </InputField>

        </Container>
        
    );
    
}

export default InputComponentMessage;