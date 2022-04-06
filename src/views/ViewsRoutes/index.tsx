import React from 'react';
import { Route, Routes } from 'react-router-dom';

import AllTicketsView from '../AllTicketsView';
import NewTicketView from '../NewTicketView';
import TicketView from '../TicketView';
//import AnnouncementsView from '../views/AnnouncementsView';
//import HomePageView from '../views/HomePageView';

const ViewsRoutes: React.FC = () => {
    return (
        <Routes>
            <Route path='/tickets' element={<AllTicketsView />} />
            <Route path='/newticket' element={<NewTicketView />} />
            <Route path='/ticketdetail' element={<TicketView />} />
        </Routes>
    );
}

export default ViewsRoutes;