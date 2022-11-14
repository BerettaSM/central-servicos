import React, { useEffect, useState } from 'react';
import { Api } from '../../Api';
import { useParams } from 'react-router-dom';

import { Layout } from './styles';
import ChatArea from '../../components/TicketViewComponents/ChatArea';
import TicketArea from '../../components/TicketViewComponents/TicketArea';
import { TicketDTOInterface } from '../../components/shared/Interfaces/TicketDTOInterface';

const TicketView: React.FC = () => {

    const { _id } = useParams();

    const [ticketFound, setTicketFound] = useState<TicketDTOInterface>();

    useEffect( () => {

        const url = `/api/ticket/${_id}`;
        
        const searchTicketFromId = async () => {

            await Api.get(url)
    
                .then((res: any) => {
    
                    let results = res.data;
                    
                    if (results) {
    
                        setTicketFound(results);
    
                    }
    
                })
    
                .catch((error: any) => {
    
                    console.log(error);
    
                });
    
        }

        (async () => {
 
            searchTicketFromId();

        })()

    }, [_id]);


    return (

        <Layout>

            <ChatArea />

            <TicketArea data={ticketFound} />

        </Layout>

    );
    
}

export default TicketView;