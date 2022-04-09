import React from 'react';

import GlobalStyles from '../../styles/GlobalStyles';
import LoginScreenComponent from '../../components/LoginTemplateComponents/LoginScreenComponent';
import { Layout, BottomBar } from './styles';

const LoginTemplate: React.FC = () => {

    const FOOTER_LOGIN_SCREEN = process.env.REACT_APP_FOOTER_LOGIN_SCREEN;

    return (

        <>

            <GlobalStyles />

            <Layout>

                <LoginScreenComponent />

                <BottomBar>

                    <span>{FOOTER_LOGIN_SCREEN}</span>

                </BottomBar>

            </Layout>

        </>

    );

}

export default LoginTemplate;