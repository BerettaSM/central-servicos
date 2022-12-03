import React, { useState } from 'react';

import LargeButton from '../../shared/LargeButton';
import InputComponentLogin from '../InputComponentLogin';
import InputComponentPassword from '../InputComponentPassword';
import ClickableSpan from '../../shared/ClickableSpan';
import { useUser } from '../../auth/UserProvider';
import { Api } from '../../../Api';
import {
    Container,
    LoginTitle,
    Wrapper
} from './styles';
import { useNavigate } from 'react-router-dom';


const LoginScreenComponent: React.FC = () => {

    const user = useUser();

    const navigate = useNavigate();

    const [username, setUsername] = useState<string>('');

    const [password, setPassword] = useState<string>('');

    const loginRequest = () => {

        (async () => {

            await Api.post('/api/auth/login', { username, password })

                .then(res => {

                    if(res.status === 200) {
                        
                        user.setJwt(res.headers["authorization"]);

                        navigate("/");

                    } 

                })

        })()

    }

    return (

        <Container>

            <LoginTitle>

                <span>LOGIN</span>

            </LoginTitle>

            <Wrapper>

                <InputComponentLogin
                    stringState={username}
                    callback={setUsername}
                    handleSubmit={loginRequest}
                />

                <InputComponentPassword
                    stringState={password}
                    callback={setPassword}
                    handleSubmit={loginRequest}
                />

                <LargeButton innerText="Login" onClick={loginRequest} />

            </Wrapper>

            <ClickableSpan innerText="Esqueci minha senha" />

            <span>Informe seu login e senha para acessar o sistema</span>

        </Container>

    );

}

export default LoginScreenComponent;

// useEffect(() => {

//     if(user.jwt) navigate("/dashboard");

// }, [user])

// const sendLoginRequest = () => {

//     const reqBody = { username, password };

//     fetch('/api/auth/login', {
//         headers: {
//             "Content-Type": "application/json"
//         },
//         method: "POST",
//         body: JSON.stringify(reqBody)
//     })
//     .then(response => {

//         if(response.status === 200)
//             return Promise.all([response.json(), response.headers]);
        
//         else return Promise.reject("Invalid login attempt");

//     })
//     .then(([body, headers]) => {

//         user.setJwt(headers.get("authorization"))

//         //updateUser()

//         //setJwt();

//         //window.location.href = "/dashboard";

//     })
//     .catch(message => {

//         alert(message);

//     });

// }