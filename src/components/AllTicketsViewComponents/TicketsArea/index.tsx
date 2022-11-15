import React from 'react';

import TicketTemplate from '../TicketTemplate';

import { Container } from './styles';
import Pagination from '../../shared/Interfaces/Pagination';


const TicketsArea: React.FC<Pagination> = ({ data }) => {

  return (

      <Container>

        {
          
          data && data.map( ( item, idx ) => {

            return (

              <TicketTemplate key={idx} data={item} />

            );

          })
          
        }

      </Container>
      
  );
}

export default TicketsArea;