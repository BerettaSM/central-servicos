import React, { useContext } from 'react';
import jwt_decode from 'jwt-decode';
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import ComponentWrapper from '../../shared/Interfaces/ComponentWrapper';

interface UserData {
    fullName: string;
    userId: number;
}

interface JWT {
    jwt: string;
    setJwt: React.Dispatch<any>;
    data: UserData;
}

const UserContext = React.createContext<JWT | undefined>(undefined);

const getDecodedUser = (jwt: string): UserData => {

    try {

        return jwt_decode(jwt);

    } catch(err) {

        return {

            fullName: "Anônimo",
            userId: -1

        };

    }

}

const UserProvider: React.FC<ComponentWrapper> = ({ children }) => {

    const [jwt, setJwt] = useLocalStorage("", "jwt");

    const data = getDecodedUser(jwt);

    const value = {jwt, setJwt, data};

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