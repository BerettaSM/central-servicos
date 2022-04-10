import React from 'react';
import { Link } from 'react-router-dom';

import TicketComponentDetails from '../../shared/TicketComponentDetails';
import TicketComponentStatus from '../TicketComponentStatus';
import UserPic from '../../shared/UserPic';

import {
  Container,
  Wrapper
} from './styles';

import { TicketDataInterface } from '../../shared/Interfaces/TicketDataInterface';

const TicketTemplate: React.FC<TicketDataInterface> = (props) => {
  
  const { data } = props;
  
  return (

      <Link to={`/ticket-detail/${data._id}`} style={{ textDecoration: 'none'}}>
        
        <Container>

          <UserPic />

          <Wrapper>

              <TicketComponentDetails data={data} />

              <TicketComponentStatus  data={data} />

          </Wrapper>

        </Container>

      </Link>

  );
}

export default TicketTemplate;