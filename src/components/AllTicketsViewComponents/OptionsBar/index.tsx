import React from 'react';
import { Link } from 'react-router-dom';

import NavigationButton from '../../shared/NavigationButton';
import AddButton from '../../../components/shared/AddButton';
import ViewTitle from '../../../components/shared/ViewTitle';

import {
  Container,
  Wrapper
} from './styles';

interface PaginationHandling {
  handleNextClick() : void;
  handlePrevClick() : void;
  isPrevDisabled: boolean | undefined;
  isNextDisabled: boolean | undefined;
}

const OptionsBar: React.FC<PaginationHandling> = ({ handleNextClick, handlePrevClick, isPrevDisabled, isNextDisabled }) => {

  return (

      <Container>

        <ViewTitle innerText="Todos Os Tickets" />

        <Wrapper>

          <NavigationButton
            onClick={handlePrevClick}
            isDisabled={isPrevDisabled}
            innerText="Anterior"
            renderArrow='left'
          />

          <NavigationButton
            onClick={handleNextClick}
            isDisabled={isNextDisabled}
            innerText="Próximo"
            renderArrow='right'
          />

          <Link to={'/new-ticket'}>

            <AddButton innerText="Novo Ticket" />

          </Link>

        </Wrapper>
        
      </Container>
      
  );
}

export default OptionsBar;