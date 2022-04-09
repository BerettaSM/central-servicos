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

  const ALL_TICKETS = process.env.REACT_APP_TITLE_ALL_TICKETS;
  const PREVIOUS = process.env.REACT_APP_NAVIGATION_PREVIOUS;
  const NEXT = process.env.REACT_APP_NAVIGATION_NEXT;
  const NEW_TICKET = process.env.REACT_APP_ACTION_NEW_TICKET;

  return (
      <Container>
        <ViewTitle innerText={ALL_TICKETS} />
        <Wrapper>
          <NavigationButton
            innerText={PREVIOUS}
            renderArrow='left'
            onClick={handlePrevClick}
            isDisabled={isPrevDisabled}
          />
          <NavigationButton
            innerText={NEXT}
            renderArrow='right'
            onClick={handleNextClick}
            isDisabled={isNextDisabled}
          />
          <Link to={'/new-ticket'} style={{ textDecoration: 'none'}}>
            <AddButton innerText={NEW_TICKET} />
          </Link>
        </Wrapper>
      </Container>
  );
}

export default OptionsBar;