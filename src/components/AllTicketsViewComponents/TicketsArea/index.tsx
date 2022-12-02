import React from 'react';

import TicketTemplate from '../TicketTemplate';

import { Container } from './styles';
import Pagination from '../../shared/Interfaces/Pagination';

import Spinner from '../../shared/Spinner';


const TicketsArea: React.FC<Pagination> = ({ data }) => {

    return (

        <Container>

            {
                data 

                ?

                data.map( ( item, idx ) => {

                    return (

                        <TicketTemplate key={idx} data={item} />

                    );

                })

                :

                <Spinner clockwise={true} smoothness='linear' width={120} doubleSemiCircles={false} />

            }

        </Container>
      
    );
}

export default TicketsArea;