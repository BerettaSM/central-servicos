import React from 'react';
import LogoArea from '../../components/DefaultTemplateComponents/LogoArea';
import SearchArea from '../../components/DefaultTemplateComponents/SearchArea';
import SideBar from '../../components/DefaultTemplateComponents/SideBar';
import MainContent from '../../components/DefaultTemplateComponents/MainContent';
import BottomBar from '../../components/DefaultTemplateComponents/BottomBar';
import { Layout } from './styles';

const DefaultTemplate: React.FC = () => {

  return (

    <>

      <Layout>

        <LogoArea />

        <SearchArea />

        <SideBar />

        <MainContent />

        <BottomBar />

      </Layout>

    </>

  );
  
}

export default DefaultTemplate;