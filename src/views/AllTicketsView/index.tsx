import React, { useEffect, useState } from 'react';
import { Api } from '../../Api';

import FilterArea from '../../components/AllTicketsViewComponents/FilterArea';
import OptionsBar from '../../components/AllTicketsViewComponents/OptionsBar';
import TicketsArea from '../../components/AllTicketsViewComponents/TicketsArea';

import { Layout } from './styles';

import { FilterInterface } from '../../components/shared/Interfaces/FilterInterface';

const AllTicketsView: React.FC<FilterInterface> = (props) => {

    const url = '/data';
    const [dataFound, setDataFound] = useState([]);

    useEffect( () => {

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

    const { selectedFilter } = props;

    return (

        <Layout>

            <OptionsBar 
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
                isPrevDisabled={isPrevDisabled}
                isNextDisabled={isNextDisabled}
            />

            <FilterArea selectedFilter={selectedFilter} />

            <TicketsArea
                data={dataFound}
                currentPage={currentPage}
                maxTickets={MAX_TICKETS_PER_PAGE}
            />

        </Layout>

    );

}

export default AllTicketsView;