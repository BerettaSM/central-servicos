import React from 'react';

import { Layout } from './styles';
import FilterArea from '../../components/AllTicketsViewComponents/FilterArea';
import OptionsBar from '../../components/AllTicketsViewComponents/OptionsBar';
import TicketsArea from '../../components/AllTicketsViewComponents/TicketsArea';

const AllTicketsView: React.FC = () => {
    return (
        <Layout>
            <OptionsBar />
            <FilterArea />
            <TicketsArea />
        </Layout>
    );
}

export default AllTicketsView;