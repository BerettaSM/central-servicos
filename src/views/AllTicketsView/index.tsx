import React, { useEffect, useState } from 'react';
import { Api } from '../../Api';

import FilterArea from '../../components/AllTicketsViewComponents/FilterArea';
import OptionsBar from '../../components/AllTicketsViewComponents/OptionsBar';
import TicketsArea from '../../components/AllTicketsViewComponents/TicketsArea';

import { Layout } from './styles';

import Filter from '../../components/shared/Interfaces/Filter';
import { FindAllApiResponse } from '../../components/shared/Interfaces/FindAllApiResponse';
import { useUser } from '../../components/auth/UserProvider';

const AllTicketsView: React.FC<Filter> = ({ selectedFilter }) => {

    const user = useUser();

    const [ currentPage, setCurrentPage ] = useState(0);
    const [ dataFound, setDataFound ] = useState<FindAllApiResponse>();
    
    useEffect( () => {

        const url = `/api/ticket?size=8&page=${currentPage}&queryType=${selectedFilter}`;

        const searchTicketData = async () => {

            await Api.get(url, { headers: { 'Authorization': `Bearer ${user.jwt}` } })

                .then( (res: any) => {

                    let results = res.data;

                    if (results) {

                        setDataFound(results);
                        
                    }

                })

                .catch( (error: any) => {

                    console.log(error);

                });
                
        }

        (async () => {

            searchTicketData();

        })()

    }, [currentPage, selectedFilter, user.jwt]);

    const data = dataFound?.content;

    const isOnFirstPage = dataFound?.first;
    const isOnLastPage = dataFound?.last;

    const handleNextClick = () => {

        if (!(isOnLastPage))

            setCurrentPage(currentPage + 1);

    }
  
    const handlePrevClick = () => {

        if (!(isOnFirstPage))

            setCurrentPage(currentPage - 1);
      
    }

    const handleResetPage = () => {

        setCurrentPage(0);

    }

    return (

        <Layout>

            <OptionsBar 
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
                isPrevDisabled={isOnFirstPage}
                isNextDisabled={isOnLastPage}
            />

            <FilterArea
                handleResetPage={handleResetPage}
                selectedFilter={selectedFilter}
            />

            <TicketsArea data={data} />

        </Layout>

    );

}

export default AllTicketsView;