import React, { useEffect, useState } from 'react';
import { Api } from '../../Api';
import { useParams } from 'react-router-dom';

import { Layout } from './styles';
import ChatArea from '../../components/TicketViewComponents/ChatArea';
import TicketArea from '../../components/TicketViewComponents/TicketArea';

const TicketView: React.FC = () => {

    const { _id } = useParams();

    const url = '/data';
    const [ticketFound, setTicketFound] = useState({});

    useEffect( () => {
        (async () => {
            searchTicketFromId();
        })()
    }, []);

    const searchTicketFromId = async () => {
        await Api.get(url)
            .then((res: any) => {
                let results = res.data.results;
                if (results) {
                    let ticket = results.find( ( ticket: any ) => {
                        return ticket._id === Number(_id)
                    });
                    console.log(ticket);
                    setTicketFound(ticket);
                }
            })
            .catch((error: any) => {
                console.log(error);
            });
    }

    return (
        <Layout>
            <ChatArea />
            <TicketArea data={ticketFound} />
        </Layout>
    );
}

export default TicketView;