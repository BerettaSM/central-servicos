import React from 'react';

import GlobalStyles from '../../styles/GlobalStyles';
import LoginScreenComponent from '../../components/LoginTemplateComponents/LoginScreenComponent';
import { Layout, BottomBar } from './styles';

const LoginTemplate: React.FC = () => {

    return (

        <>

            <GlobalStyles />

            <Layout>

                <LoginScreenComponent />

                <BottomBar>

                    <span>Desenvolvido com Amor pelo team XXX</span>

                </BottomBar>

            </Layout>

        </>

    );

}

export default LoginTemplate;