import React from 'react';

import { Container } from './styles';

import TicketTemplate from '../TicketTemplate';

interface Pagination{
  data: object[];
  currentPage: number;
  maxTickets: number;
}

const TicketsArea: React.FC<Pagination> = (props) => {

  const { data, currentPage, maxTickets } = props;

  const pageEnd = currentPage * maxTickets;
  const pageStart = pageEnd - maxTickets;

  return (
      <Container>
        {data
          .slice(pageStart, pageEnd)
          .map( item => <TicketTemplate ticketData={item} />)}
      </Container>
  );
}

export default TicketsArea;