import React, { useState } from 'react';

import {
    Container,
    InputField,
    InputForm,
    PaperPlaneIcon
} from './styles';

import InputComponent from '../Interfaces/InputComponent';

const InputComponentMessage: React.FC<InputComponent> = ({ title, placeholder, onSubmitEvent }) => {

    const [ inputValue, setInputValue ] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        setInputValue(e.target.value);

    }

    const onEnterDown = (e: React.KeyboardEvent) => {
        
        if(e.key === 'Enter') {

            handleSubmit();
            
        }

    }

    const handleSubmit = () => {

        if(onSubmitEvent !== undefined) {

            onSubmitEvent(inputValue);

            setInputValue('');

        }

    }

    return (

        <Container>

            <span>{title}</span>

            <InputField>

                <InputForm type='text' placeholder={placeholder} onKeyDown={onEnterDown} onChange={handleChange} value={inputValue}/>

                <button onClick={handleSubmit}>

                    <PaperPlaneIcon />

                </button>

            </InputField>

        </Container>
        
    );
    
}

export default InputComponentMessage;