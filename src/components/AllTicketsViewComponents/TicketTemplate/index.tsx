import React from 'react';

import { Container, Wrapper } from './styles';
import TicketComponentDetails from '../../shared/TicketComponentDetails';
import TicketComponentStatus from '../TicketComponentStatus';
import UserPic from '../../shared/UserPic';

import { Link } from 'react-router-dom';

interface TicketData {
  data: any;
}

const TicketTemplate: React.FC<TicketData> = (props) => {
  
  const { data } = props;
  const { _id } = data;
  
  return (
      <Link to={`/ticket-detail/${_id}`} style={{ textDecoration: 'none'}}>
        <Container>
          <UserPic />
          <Wrapper>
              <TicketComponentDetails data={data} />
              <TicketComponentStatus data={data} />
          </Wrapper>
        </Container>
      </Link>
  );
}

export default TicketTemplate;