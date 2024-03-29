import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AllTicketsView from '../AllTicketsView';
import NewTicketView from '../NewTicketView';
import StatisticsView from '../StatisticsView';
import TicketView from '../TicketView';

const ViewsRoutes: React.FC = () => {

    return (

        <Routes>

            <Route
                path='/tickets'
                element={<AllTicketsView selectedFilter={0} />}
            />

            <Route
                path='/tickets/open-tickets'
                element={<AllTicketsView selectedFilter={1} />}
            />

            <Route
                path='/tickets/ongoing-tickets'
                element={<AllTicketsView selectedFilter={2} />}
            />

            <Route
                path='/tickets/my-ongoing-tickets'
                element={<AllTicketsView selectedFilter={3} />}
            />

            <Route
                path='/tickets/my-closed-tickets'
                element={<AllTicketsView selectedFilter={4} />}
            />

            <Route
                path='/statistics'
                element={<StatisticsView />}
            />

            <Route
                path='/new-ticket'
                element={<NewTicketView />}
            />

            <Route
                path='/ticket-detail/:_id'
                element={<TicketView />}
            />

        </Routes>

    );
    
}

export default ViewsRoutes;