import React, { useEffect, useState } from 'react';
import { Api } from '../../Api';

import { Layout } from './styles';
import FilterArea from '../../components/AllTicketsViewComponents/FilterArea';
import OptionsBar from '../../components/AllTicketsViewComponents/OptionsBar';
import TicketsArea from '../../components/AllTicketsViewComponents/TicketsArea';

const AllTicketsView: React.FC = () => {

    const url = "/data";
    const [dataFound, setDataFound] = useState([]);

    useEffect(() => {
        (async () => {
        searchTicketData();
        })()
    }, []);

    const searchTicketData = async () => {
        await Api.get(url)
        .then((res: any) => {
            let results = res.data.results;
            if (results) {
                setDataFound(results);
            }
        })
        .catch((error: any) => {
            console.log(error);
        });
    }
    
    const [ currentPage, setCurrentPage ] = useState(1);

    const handleNextClick = () => {

        if(currentPage < lastPage)

            setCurrentPage(currentPage + 1);

    }
  
    const handlePrevClick = () => {
  
        if (currentPage > 1)
        
            setCurrentPage(currentPage - 1);
      
    }

    const MAX_TICKETS_PER_PAGE = 8;
    const lastPage = Math.ceil(dataFound.length / MAX_TICKETS_PER_PAGE);

    const isPrevDisabled = currentPage === 1;
    const isNextDisabled = currentPage === lastPage;

    return (
        <Layout>
            <OptionsBar 
                handleNextClick={handleNextClick}
                handlePrevClick={handlePrevClick}
                isPrevDisabled={isPrevDisabled}
                isNextDisabled={isNextDisabled}
            />
            <FilterArea />
            <TicketsArea
                data={dataFound}
                currentPage={currentPage}
                maxTickets={MAX_TICKETS_PER_PAGE}
            />
        </Layout>
    );
}

export default AllTicketsView;