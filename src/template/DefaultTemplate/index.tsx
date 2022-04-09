import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from '../../styles/GlobalStyles';
import LogoArea from '../../components/DefaultTemplateComponents/LogoArea';
import SearchArea from '../../components/DefaultTemplateComponents/SearchArea';
import SideBar from '../../components/DefaultTemplateComponents/SideBar';
import MainContent from '../../components/DefaultTemplateComponents/MainContent';
import BottomBar from '../../components/DefaultTemplateComponents/BottomBar';
import { Layout } from './styles';

const DefaultTemplate: React.FC = () => {

  return (

    <BrowserRouter>

      <GlobalStyles />

      <Layout>

        <LogoArea />

        <SearchArea />

        <SideBar />

        <MainContent />

        <BottomBar />

      </Layout>

    </BrowserRouter>

  );
  
}

export default DefaultTemplate;