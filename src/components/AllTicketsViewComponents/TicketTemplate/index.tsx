import React from 'react';
import { Link } from 'react-router-dom';

import TicketComponentDetails from '../../shared/TicketComponentDetails';
import TicketComponentStatus from '../TicketComponentStatus';
import UserPic from '../../shared/UserPic';

import {
  Container,
  Wrapper
} from './styles';

import { TicketData } from '../../shared/Interfaces/TicketData';

const TicketTemplate: React.FC<TicketData> = (props) => {
  
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