import React from 'react';

import TicketTemplate from '../TicketTemplate';

import { Container } from './styles';

interface Pagination{
  data: object[];
  currentPage: number;
  maxTickets: number;
}

const TicketsArea: React.FC<Pagination> = (props) => {

  const { data, currentPage, maxTickets } = props;

  const pageEnd   = currentPage * maxTickets;
  const pageStart =   pageEnd   - maxTickets;

  return (

      <Container>

        {

          data.slice(pageStart, pageEnd).map( ( item, idx ) => {

            return (

              <TicketTemplate key={idx} data={item} />

            );

          })
          
        }

      </Container>
      
  );
}

export default TicketsArea;