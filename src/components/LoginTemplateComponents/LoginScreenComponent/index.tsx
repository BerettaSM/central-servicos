import React from 'react';

import LargeButton from '../../shared/LargeButton';
import InputComponentLogin from '../InputComponentLogin';
import InputComponentPassword from '../InputComponentPassword';

import {
    Container,
    LoginTitle,
    Wrapper
} from './styles';

const LoginScreenComponent: React.FC = () => {

    const ACTION_LOGIN                 = process.env.REACT_APP_ACTION_LOGIN;
    const ACTION_FORGOT_MY_PASSWORD    = process.env.REACT_APP_ACTION_FORGOT_MY_PASSWORD;
    const ACTION_INFORM_LOGIN_PASSWORD = process.env.REACT_APP_ACTION_INFORM_LOGIN_PASSWORD;

    return (

        <Container>

            <LoginTitle>

                <span>{ACTION_LOGIN}</span>

            </LoginTitle>

            <Wrapper>

                <InputComponentLogin />

                <InputComponentPassword />

                <LargeButton innerText={ACTION_LOGIN} />

            </Wrapper>

            <span>{ACTION_FORGOT_MY_PASSWORD}</span>

            <span>{ACTION_INFORM_LOGIN_PASSWORD}</span>

        </Container>

    );

}

export default LoginScreenComponent;