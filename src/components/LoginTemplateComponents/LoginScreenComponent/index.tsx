import React from 'react';

import LargeButton from '../../shared/LargeButton';
import InputComponentLogin from '../InputComponentLogin';
import InputComponentPassword from '../InputComponentPassword';
import ClickableSpan from '../../shared/ClickableSpan';

import {
    Container,
    LoginTitle,
    Wrapper
} from './styles';

const LoginScreenComponent: React.FC = () => {

    const {
        REACT_APP_ACTION_LOGIN,
        REACT_APP_ACTION_FORGOT_MY_PASSWORD,
        REACT_APP_ACTION_INFORM_LOGIN_PASSWORD
    } = process.env;

    return (

        <Container>

            <LoginTitle>

                <span>{REACT_APP_ACTION_LOGIN?.toUpperCase()}</span>

            </LoginTitle>

            <Wrapper>

                <InputComponentLogin />

                <InputComponentPassword />

                <LargeButton innerText={REACT_APP_ACTION_LOGIN} />

            </Wrapper>

            <ClickableSpan innerText={REACT_APP_ACTION_FORGOT_MY_PASSWORD} />

            <span>{REACT_APP_ACTION_INFORM_LOGIN_PASSWORD}</span>

        </Container>

    );

}

export default LoginScreenComponent;