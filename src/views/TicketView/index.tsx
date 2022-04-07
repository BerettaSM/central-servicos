import React from 'react';
import { useParams } from 'react-router-dom';

import { Layout } from './styles';
import ChatArea from '../../components/TicketViewComponents/ChatArea';
import TicketArea from '../../components/TicketViewComponents/TicketArea';

const TicketView: React.FC = () => {

    const { _id } = useParams();

    return (
        <Layout>
            <ChatArea />
            <TicketArea />
        </Layout>
    );
}

export default TicketView;