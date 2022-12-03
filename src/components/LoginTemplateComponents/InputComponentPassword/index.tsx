import React from 'react';
import CallbackAuth from '../../shared/Interfaces/CallbackAuth';

import {
    Container,
    PasswordForm,
    PasswordIcon
} from './styles';

const InputComponentPassword: React.FC<CallbackAuth> = ({ stringState, callback, handleSubmit }) => {

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        callback(e.target.value);

    }

    const onEnterDown = (e: React.KeyboardEvent) => {
        
        if(e.key === 'Enter' && handleSubmit !== undefined) {

            handleSubmit();
            
        }

    }

    return (

        <Container>

            <PasswordIcon />

            <PasswordForm
                type="password"
                placeholder="Password"
                onChange={(e) => handleChange(e)}
                onKeyDown={onEnterDown}
                value={stringState}
            />

        </Container>

    );

}

export default InputComponentPassword;