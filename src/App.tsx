import React from 'react';
import { Route, Routes,  BrowserRouter } from 'react-router-dom';
import GlobalStyles from './styles/GlobalStyles';
import PrivateRoute from './components/PrivateRoute';
import DefaultTemplate from './template/DefaultTemplate';
import LoginTemplate from './template/LoginTemplate';

import { UserProvider } from './components/auth/UserProvider';

const App: React.FC = () => {

    return (

        <BrowserRouter>

            <UserProvider>

                <>
                
                    <GlobalStyles />

                    <Routes>

                        <Route path='*' element={

                            <PrivateRoute>

                                <DefaultTemplate />

                            </PrivateRoute>
                            
                        } />

                        <Route path='/login' element={<LoginTemplate />} />

                    </Routes>

                </>

            </UserProvider>

        </BrowserRouter>

    );
    
}

export default App;