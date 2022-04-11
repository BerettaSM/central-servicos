import React, { useEffect, useState } from 'react';
import { Api } from '../../Api';

import FilterArea from '../../components/AllTicketsViewComponents/FilterArea';
import OptionsBar from '../../components/AllTicketsViewComponents/OptionsBar';
import TicketsArea from '../../components/AllTicketsViewComponents/TicketsArea';

import { Layout } from './styles';

import { FilterInterface } from '../../components/shared/Interfaces/FilterInterface';

const AllTicketsView: React.FC<FilterInterface> = (props) => {

    const url = '/data';
    const [ dataFound, setDataFound ] = useState([]);

    useEffect( () => {

        (async () => {

            searchTicketData();

        })()

    }, []);

    const searchTicketData = async () => {

        await Api.get(url)

            .then( (res: any) => {

                let results = res.data.results;

                if (results) {

                    setDataFound(results);

                }

            })

            .catch( (error: any) => {

                console.log(error);

            });
            
    }

    const { selectedFilter } = props;

    let data = dataFound;

    const { REACT_APP_MOCK_USER_NAME } = process.env; // Filter testing

    switch (selectedFilter) {

        case 2:

            data = dataFound.filter( (item: any) => {

                return item.status === 1

            });

            break;

        case 3:

            data = dataFound.filter( (item: any) => {

                return item.status === 2

            });

            break;

        case 4:

            data = dataFound.filter( (item: any) => {

                return item.currentAttendant === REACT_APP_MOCK_USER_NAME
                            &&
                       item.status === 2

            });

            break;

        case 5:

            data = dataFound.filter( (item: any) => {

                return item.currentAttendant === REACT_APP_MOCK_USER_NAME
                            && 
                       item.status === 3
                       
            });
            
            break;

    }

    const [ currentPage, setCurrentPage ] = useState(1);

    const handleNextClick = () => {

        if (currentPage < lastPage)

            setCurrentPage(currentPage + 1);

    }
  
    const handlePrevClick = () => {
  
        if (currentPage > 1)

            setCurrentPage(currentPage - 1);
      
    }

    const handleResetPage = () => {

        setCurrentPage(1);

    }

    const MAX_TICKETS_PER_PAGE = 8;
    const lastPage = Math.ceil(data.length / MAX_TICKETS_PER_PAGE);

    const isPrevDisabled = currentPage <= 1;
    const isNextDisabled = currentPage >= lastPage;

    return (

        <Layout>

            <OptionsBar 
                handlePrevClick={handlePrevClick}
                handleNextClick={handleNextClick}
                isPrevDisabled={isPrevDisabled}
                isNextDisabled={isNextDisabled}
            />

            <FilterArea
                handleResetPage={handleResetPage}
                selectedFilter={selectedFilter}
            />

            <TicketsArea
                maxTickets={MAX_TICKETS_PER_PAGE}
                currentPage={currentPage}
                data={data}
            />

        </Layout>

    );

}

export default AllTicketsView;