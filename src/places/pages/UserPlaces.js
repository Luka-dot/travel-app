import React from 'react';

import PlaceList from '../components/PlaceList';

const DUMMY_PLACES = [
  {
    id: 'p1',
    title: 'Empire State Building',
    description: 'One of the most famous sky scrapers in the world!',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
    address: '20 W 34th St, New York, NY 10001',
    location: {
      lat: 40.7484405,
      lng: -73.9878584
    },
    creator: 'u1'
  },
  
    {
        id: 'p3',
        title: 'Prague Old Town Square',
        description: 'Old Town Square in Prague Czech rep.',
        imageUrl: 'https://www.planetware.com/wpimages/2019/06/czech-republic-prague-itineraries-for-travelers-one-day-itinerary-old-town-square.jpg',
        address: 'Staroměstské nám., 110 00 Josefov, Czechia',
        location: {
            lag: 50.0875726,
            lng: 14.4189988
        },
        creator: 'u1'
    },
    {
        id: 'p4',
        title: 'Cesky Krumplov',
        description: 'Old Town of Cesky Krumlov. Town in Czech rep.',
        imageUrl: 'https://i.redd.it/q2f9xfhtvfb31.jpg',
        address: '381 01 Český Krumlov, Czechia',
        location: {
            lag: 48.8118349,
            lng: 14.3138502
        },
        creator: 'u2'
    },
    {
        id: 'p2',
        title: 'Empire State Building',
        description: 'One of the most famous sky scrapers in the world!',
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/NYC_Empire_State_Building.jpg/640px-NYC_Empire_State_Building.jpg',
        address: '20 W 34th St, New York, NY 10001',
        location: {
          lat: 40.7484405,
          lng: -73.9878584
        },
        creator: 'u2'
      },
];

const UserPlaces = () => {

  return <PlaceList items={DUMMY_PLACES} />;
};

export default UserPlaces;