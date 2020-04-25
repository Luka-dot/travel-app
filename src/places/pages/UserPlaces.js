import React from 'react';
import { useParams } from 'react-router-dom';

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
              lat: 50.0894,
              lng: 14.4194
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
              lat: 48.81091,
              lng: 14.31521
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
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter(place => place.creator === userId);
  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
