import React from 'react';
import { Route, Routes } from 'react-router-dom';


import DefaultTemplate from '../template/DefaultTemplate';
import LoginTemplate from '../template/LoginTemplate';

const SystemRoutes: React.FC = () => {

    return (

        <Routes>

            <Route path='/' element={<DefaultTemplate />} />

            <Route path='/login' element={<LoginTemplate />} />

        </Routes>

    );
    
}

export default SystemRoutes;