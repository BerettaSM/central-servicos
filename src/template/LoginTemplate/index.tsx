import React from 'react';
import LoginScreenComponent from '../../components/LoginTemplateComponents/LoginScreenComponent';
import { Layout, BottomBar } from './styles';

const LoginTemplate: React.FC = () => {

    const currentYear = () => {

        return new Date().getFullYear();

    }

    return (

        <>

            <Layout>

                <LoginScreenComponent />

                <BottomBar>

                    <span>® {currentYear()}. Desenvolvido com Amor pelo team.</span>

                </BottomBar>

            </Layout>

        </>

    );

}

export default LoginTemplate;