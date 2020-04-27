import React, { useEffect, useState } from 'react';

import UsersList from '../components/UsersList';
import ErrorModal from '../../shared/components/UIElements/ErrorModal';
import LoadingSpinner from '../../shared/components/UIElements/ErrorModal';


const Users = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState();
    const [loadedUsers, setLoadedUsers] = useState();

    useEffect(() => {
        // can not use async await in useEffect. therefor using in in send request function
        const sendRequest = async () => {
            setIsLoading(true);
            try {
                const response = await fetch('http://localhost:5000/api/users');

                const responseData = await response.json();

                if (!response.ok) {
                    throw new Error(responseData.message);
                }

                setLoadedUsers(responseData.users);
                
            } catch (err) {
                setError(err.message);
            }
            setIsLoading(false);       
        };
        sendRequest();
    }, []);

    const errorHandler = () => {

    }

    return <React.Fragment>
                <ErrorModal error={error} onClear={errorHandler} />
                {isLoading && ( <div className='center'>
                       <LoadingSpinner /> 
                    </div> 
                )}
                {!isLoading && loadedUsers && <UsersList items={loadedUsers} />};
            </React.Fragment>
}

export default Users;