import React, { useEffect, useState } from 'react';
import { Api } from '../../../Api';

import { Container } from './styles';

import TicketTemplate from '../TicketTemplate';

const TicketsArea: React.FC = () => {

  const url = "/data";
  const url2 = "/datasetwithfiveobjects";
  const [dataFound, setDataFound] = useState([]);

  useEffect(() => {
    (async () => {
      searchTicketData();
    })()
  }, []);

  const searchTicketData = async () => {
    await Api.get(url2)
      .then((res: any) => {
        let results = res.data.results;
        if (results) {
          setDataFound(results);
        }
      })
      .catch((error: any) => {
        console.log(error);
      })
  }

  return (
      <Container>
        {dataFound.map( item => <TicketTemplate ticketData={item} />)}
      </Container>
  );
}

export default TicketsArea;