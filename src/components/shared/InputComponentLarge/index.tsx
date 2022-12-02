import React from 'react';

import {
    Container,
    InputField,
    InputForm
} from './styles';

import InputComponent from '../Interfaces/InputComponent';
import UpdateNewTicket from '../Interfaces/UpdateNewTicket';

type InputComponentWithUpdateNewTicket = InputComponent & UpdateNewTicket;

const InputComponentLarge: React.FC<InputComponentWithUpdateNewTicket> = ({ title, newTicketState, propertyToUpdate }) => {

    const onInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {

        if(newTicketState !== undefined && propertyToUpdate === 'description') {

            const [newTicket, setNewTicket] = newTicketState;

            newTicket[propertyToUpdate] = e.target.value;

            setNewTicket(Object.assign({}, newTicket));

        }

    }

    return (

        <Container>

            <span>{title}</span>

            <InputField>

                <InputForm onChange={onInputChange} />

            </InputField>

        </Container>

    );
    
}

export default InputComponentLarge;