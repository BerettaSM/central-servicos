import React from 'react';

import LargeButton from '../../shared/LargeButton';
import InputComponentLogin from '../InputComponentLogin';
import InputComponentPassword from '../InputComponentPassword';
import { Container, LoginTitle, Wrapper } from './styles';

const LoginScreenComponent: React.FC = () => {
    return (
        <Container>
            <LoginTitle>
                <span>LOGIN</span>
            </LoginTitle>
            <Wrapper>
                <InputComponentLogin />
                <InputComponentPassword />
                <LargeButton innerText='Login'/>
            </Wrapper>
            <span>Esqueci minha senha</span>
            <span>Informe seu login e senha para acessar o sistema.</span>
        </Container>
    );
}

export default LoginScreenComponent;