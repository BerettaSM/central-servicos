import React, { useContext } from 'react';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import ComponentWrapper from '../../shared/Interfaces/ComponentWrapper';

interface JWT {
    jwt: string;
    setJwt: React.Dispatch<any>;
}

const UserContext = React.createContext<JWT | undefined>(undefined);

const UserProvider: React.FC<ComponentWrapper> = ({ children }) => {

    const [jwt, setJwt] = useLocalStorage("", "jwt");

    const value = {jwt, setJwt};

    return (

        <UserContext.Provider value={value}>

            {children}
            
        </UserContext.Provider>

    );

}

const useUser = () => {

    const context = useContext(UserContext);

    if(context === undefined) {

        throw new Error("useUser precisa ser usado de dentro de um UserProvider.");
        
    }

    return context;

}

export {useUser, UserProvider};