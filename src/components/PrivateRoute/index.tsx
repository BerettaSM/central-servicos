import React, {  useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Api } from '../../Api';
import { useUser } from '../../auth';
import Spinner from '../shared/Spinner';
import ComponentWrapper from '../shared/Interfaces/ComponentWrapper';


const PrivateRoute: React.FC<ComponentWrapper> = ({ children }) => {

    const user = useUser();

    const [isLoading, setIsLoading] = useState(true);

    const [isValid, setIsValid] = useState(false);

    if(user !== undefined) {

        (async () => {
            
            Api.get(`/api/auth/validate?token=${user.jwt}`, { headers: { 'Authorization': `Bearer ${user.jwt}` } })

                .then(res => {

                    const valid: boolean = res.data;

                    setIsValid(valid);

                    setIsLoading(false);

                })

                .catch(err => {

                    console.error(err);

                })

        })()

    } else {

        return <Navigate to="/login" />;

    }

    return isLoading ? (

        <div>

            <Spinner
                clockwise={true}
                doubleSemiCircles={false}
                smoothness={'linear'}
                width={150}
            />

        </div>

    ) : isValid ? (

        children

    ) : (

        <Navigate to="/login" />

    );

}

export default PrivateRoute;