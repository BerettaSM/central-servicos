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
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
}

const OptionsBar: React.FC<PaginationHandling> = (props) => {

  const { handleNextClick, handlePrevClick, isPrevDisabled, isNextDisabled } = props;

  const ALL_TICKETS = process.env.REACT_APP_TITLE_ALL_TICKETS;
  const PREVIOUS    = process.env.REACT_APP_NAVIGATION_PREVIOUS;
  const NEXT        = process.env.REACT_APP_NAVIGATION_NEXT;
  const NEW_TICKET  = process.env.REACT_APP_ACTION_NEW_TICKET;

  return (

      <Container>

        <ViewTitle innerText={ALL_TICKETS} />

        <Wrapper>

          <NavigationButton
            onClick={handlePrevClick}
            isDisabled={isPrevDisabled}
            innerText={PREVIOUS}
            renderArrow='left'
          />

          <NavigationButton
            onClick={handleNextClick}
            isDisabled={isNextDisabled}
            innerText={NEXT}
            renderArrow='right'
          />

          <Link to={'/new-ticket'}>

            <AddButton innerText={NEW_TICKET} />

          </Link>

        </Wrapper>
        
      </Container>
      
  );
}

export default OptionsBar;