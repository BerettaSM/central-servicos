import React from 'react';
import Callback from '../../shared/Interfaces/CallbackAuth';

import {
    Container,
    LoginForm,
    UserIcon
} from './styles';

const InputComponentLogin: React.FC<Callback> = ({ stringState, callback, handleSubmit }) => {

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

            <UserIcon />

            <LoginForm
                type='text'
                name='username'
                placeholder='Login'
                onChange={(e) => handleChange(e)}
                onKeyDown={onEnterDown}
                value={stringState}
            />

        </Container>

    );

}

export default InputComponentLogin;