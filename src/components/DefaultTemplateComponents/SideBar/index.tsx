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

  const NAVIGATION_HOME_PAGE     = process.env.REACT_APP_NAVIGATION_HOME_PAGE;
  const NAVIGATION_TICKETS       = process.env.REACT_APP_NAVIGATION_TICKETS;
  const NAVIGATION_ANNOUNCEMENTS = process.env.REACT_APP_NAVIGATION_ANNOUNCEMENTS;
  
  return (

    <Container>

      <SideBarOption>

        <HomeIcon />

        <span>{NAVIGATION_HOME_PAGE}</span>

      </SideBarOption>

      <Link to={'/tickets'}>

        <SideBarOption>

          <TicketsIcon />

          <span>{NAVIGATION_TICKETS}</span>

        </SideBarOption>

      </Link>

      <SideBarOption>

        <AnnouncementsIcon />

        <span>{NAVIGATION_ANNOUNCEMENTS}</span>

      </SideBarOption>

    </Container>

  );
  
}

export default SideBar;