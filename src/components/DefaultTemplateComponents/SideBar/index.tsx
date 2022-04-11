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

  const {
    REACT_APP_NAVIGATION_HOME_PAGE,
    REACT_APP_NAVIGATION_TICKETS,
    REACT_APP_NAVIGATION_ANNOUNCEMENTS
  } = process.env;  

  return (

    <Container>

      <SideBarOption>

        <HomeIcon />

        <span>{REACT_APP_NAVIGATION_HOME_PAGE}</span>

      </SideBarOption>

      <Link to={'/tickets'}>

        <SideBarOption>

          <TicketsIcon />

          <span>{REACT_APP_NAVIGATION_TICKETS}</span>

        </SideBarOption>

      </Link>

      <SideBarOption>

        <AnnouncementsIcon />

        <span>{REACT_APP_NAVIGATION_ANNOUNCEMENTS}</span>

      </SideBarOption>

    </Container>

  );
  
}

export default SideBar;