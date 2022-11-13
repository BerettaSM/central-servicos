import React from 'react';
import { TicketDTOInterface } from '../../shared/Interfaces/TicketDTOInterface';

import TicketTemplate from '../TicketTemplate';

import { Container } from './styles';

interface Pagination{
  data: TicketDTOInterface[] | undefined;
}

const TicketsArea: React.FC<Pagination> = (props) => {

  const { data } = props;

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