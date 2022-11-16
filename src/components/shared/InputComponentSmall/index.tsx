import React from 'react';

import {
    Container,
    InputField,
    InputForm
} from './styles';

import InputComponent from '../Interfaces/InputComponent';

import UpdateNewTicket from '../Interfaces/UpdateNewTicket';

type InputComponentWithUpdateNewTicket = InputComponent & UpdateNewTicket;

const InputComponentSmall: React.FC<InputComponentWithUpdateNewTicket> = ({ title, placeholder, newTicketState, propertyToUpdate }) => {

    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        if(newTicketState !== undefined && propertyToUpdate === 'title') {

            const [newTicket, setNewTicket] = newTicketState;

            newTicket[propertyToUpdate] = e.target.value;

            setNewTicket(Object.assign({}, newTicket));

        }

    }

    return (
        <Container>

            <span>{title}</span>

            <InputField>

                <InputForm type='text' placeholder={placeholder} onChange={onInputChange}/>

            </InputField>

        </Container>

    );

}

export default InputComponentSmall;