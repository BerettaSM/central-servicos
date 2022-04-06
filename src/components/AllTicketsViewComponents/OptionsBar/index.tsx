import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Wrapper } from './styles';
import Button1 from '../../../components/shared/PreviousButton';
import Button2 from '../../../components/shared/NextButton';
import AddButton from '../../../components/shared/AddButton';
import ViewTitle from '../../../components/shared/ViewTitle';

const OptionsBar: React.FC = () => {
  return (
      <Container>
        <ViewTitle innerText='Todos os Tickets' />
        <Wrapper>
          <Button1 InnerText='Anterior'/>
          <Button2 InnerText='Próximo' />
          <Link to={'/newticket'} style={{ textDecoration: 'none'}}>
            <AddButton InnerText='Novo Ticket' />
          </Link>
        </Wrapper>
      </Container>
  );
}

export default OptionsBar;