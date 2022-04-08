import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Wrapper } from './styles';
import NavigationButton from '../../shared/NavigationButton';
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
          <NavigationButton
            innerText='Anterior'
            renderArrow='left'
            onClick={handlePrevClick}
            isDisabled={isPrevDisabled}
          />
          <NavigationButton
            innerText='Próximo'
            renderArrow='right'
            onClick={handleNextClick}
            isDisabled={isNextDisabled}
          />
          <Link to={'/new-ticket'} style={{ textDecoration: 'none'}}>
            <AddButton InnerText='Novo Ticket' />
          </Link>
        </Wrapper>
      </Container>
  );
}

export default OptionsBar;