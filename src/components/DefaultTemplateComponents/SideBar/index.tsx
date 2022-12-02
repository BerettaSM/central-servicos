import React from 'react';
import { Link } from 'react-router-dom';

import {
  AnnouncementsIcon,
  Container,
  HomeIcon,
  SideBarOption,
  TicketsIcon
} from './styles';

const SideBar: React.FC = () => {

  return (

    <Container>

      <SideBarOption>

        <HomeIcon />

        <span>Página Inicial</span>

      </SideBarOption>

      <Link to={'/tickets'}>

        <SideBarOption>

          <TicketsIcon />

          <span>Tickets</span>

        </SideBarOption>

      </Link>

      <SideBarOption>

        <AnnouncementsIcon />

        <span>Mural De Avisos</span>

      </SideBarOption>

    </Container>

  );
  
}

export default SideBar;