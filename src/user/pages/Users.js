import React from 'react';

import UsersList from '../components/UsersList';

const Users = () => {
    const USERS = [{
        id: 'u1', 
        name: 'Lukas', 
        image: 'https://www.planetware.com/wpimages/2019/06/czech-republic-prague-itineraries-for-travelers-one-day-itinerary-old-town-square.jpg',
        places: 5
    },
    {
        id: 'u2', 
        name: 'Max', 
        image: 'https://i.redd.it/q2f9xfhtvfb31.jpg',
        places: 3
    }];
    return <UsersList items={USERS} />;
}

export default Users;