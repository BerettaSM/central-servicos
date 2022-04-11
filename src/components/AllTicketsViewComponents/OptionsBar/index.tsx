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

  const {
    REACT_APP_TITLE_ALL_TICKETS,
    REACT_APP_NAVIGATION_PREVIOUS,
    REACT_APP_NAVIGATION_NEXT,
    REACT_APP_ACTION_NEW_TICKET
  } = process.env;
  
  return (

      <Container>

        <ViewTitle innerText={REACT_APP_TITLE_ALL_TICKETS} />

        <Wrapper>

          <NavigationButton
            onClick={handlePrevClick}
            isDisabled={isPrevDisabled}
            innerText={REACT_APP_NAVIGATION_PREVIOUS}
            renderArrow='left'
          />

          <NavigationButton
            onClick={handleNextClick}
            isDisabled={isNextDisabled}
            innerText={REACT_APP_NAVIGATION_NEXT}
            renderArrow='right'
          />

          <Link to={'/new-ticket'}>

            <AddButton innerText={REACT_APP_ACTION_NEW_TICKET} />

          </Link>

        </Wrapper>
        
      </Container>
      
  );
}

export default OptionsBar;