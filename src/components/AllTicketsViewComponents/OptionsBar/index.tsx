import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Wrapper } from './styles';
import PreviousButton from '../../../components/shared/PreviousButton';
import NextButton from '../../../components/shared/NextButton';
import AddButton from '../../../components/shared/AddButton';
import ViewTitle from '../../../components/shared/ViewTitle';

interface PaginationHandling {
  handleNextClick() : void;
  handlePrevClick() : void;
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

const OptionsBar: React.FC<PaginationHandling> = (props) => {

  const { handleNextClick, handlePrevClick, isPrevDisabled, isNextDisabled } = props;

  return (
      <Container>
        <ViewTitle innerText='Todos os Tickets' />
        <Wrapper>
          <PreviousButton
            innerText='Anterior'
            onClick={handlePrevClick}
            isDisabled={isPrevDisabled}
          />
          <NextButton
            innerText='Próximo'
            onClick={handleNextClick}
            isDisabled={isNextDisabled}
          />
          <Link to={'/newticket'} style={{ textDecoration: 'none'}}>
            <AddButton InnerText='Novo Ticket' />
          </Link>
        </Wrapper>
      </Container>
  );
}

export default OptionsBar;