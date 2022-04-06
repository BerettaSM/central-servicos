import React from 'react';

import { Layout } from './styles';
import ChatArea from '../../components/TicketViewComponents/ChatArea';
import TicketArea from '../../components/TicketViewComponents/TicketArea';

const TicketView: React.FC = () => {
    return (
        <Layout>
            <ChatArea />
            <TicketArea />
        </Layout>
    );
}

export default TicketView;