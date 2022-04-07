import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Wrapper } from './styles';
import Button1 from '../../../components/shared/PreviousButton';
import Button2 from '../../../components/shared/NextButton';
import AddButton from '../../../components/shared/AddButton';
import ViewTitle from '../../../components/shared/ViewTitle';

interface PageHandling {
  handleNextClick() : void;
  handlePrevClick() : void;
}

const OptionsBar: React.FC<PageHandling> = (props) => {



  return (
      <Container>
        <ViewTitle innerText='Todos os Tickets' />
        <Wrapper>
          <Button1 innerText='Anterior' onClick={props.handlePrevClick} />
          <Button2 innerText='Próximo' onClick={props.handleNextClick} />
          <Link to={'/newticket'} style={{ textDecoration: 'none'}}>
            <AddButton InnerText='Novo Ticket' />
          </Link>
        </Wrapper>
      </Container>
  );
}

export default OptionsBar;