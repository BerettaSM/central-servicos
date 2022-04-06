import React from 'react';

import { Container, Wrapper } from './styles';
import TicketComponentDetails from '../../shared/TicketComponentDetails';
import TicketComponentStatus from '../TicketComponentStatus';
import UserPic from '../../shared/UserPic';

import { Link } from 'react-router-dom';

interface TicketData {
  ticketData: any;
}

const TicketTemplate: React.FC<TicketData> = (props) => {
  
  const { ticketData } = props;
  
  return (
      <Link to={'/ticketdetail'} style={{ textDecoration: 'none'}}>
        <Container>
          <UserPic />
          <Wrapper>
              <TicketComponentDetails data={ticketData} />
              <TicketComponentStatus data={ticketData} />
          </Wrapper>
        </Container>
      </Link>
  );
}

export default TicketTemplate;