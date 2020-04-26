import React, { Component } from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';
import './PlaceForm.css';
import { useForm } from '../../shared/hooks/form-hook';

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

const UpdatePlace = () => {
    const placeId = useParams().placeId;

    const identifiedPlace = DUMMY_PLACES.find(p => p.id === placeId);

    const [formState, inputHandler] = useForm({
        title: {
            value: identifiedPlace.title,
            isValid: true
        },
        description: {
            value: identifiedPlace.description,
            isValid: true
        }
    }, true
    );

    const placeUpdateSubmitHandler = event => {
        event.preventDefault();
        console.log(formState.inputs);
    }

    if (!identifiedPlace) {
        return (
            <div className="center">
                <h2>Couldnt find place</h2>
            </div>
        );
    }

    return <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
        <Input 
            id="title" 
            element="input"
            type="text" 
            label="Title"
            validators={[VALIDATOR_REQUIRE()]} 
            errorText="Please enter valid title"
            onInput={inputHandler}
            initialValue={formState.inputs.title.value}
            initialValid={formState.inputs.title.isValid}
            />
            <Input 
            id="description" 
            element="textarea" 
            label="Description"
            validators={[VALIDATOR_MINLENGTH(5)]} 
            errorText="Please enter valid description (min 5 characters"
            onInput={inputHandler}
            initialValue={formState.inputs.description.value}
            initialValid={formState.inputs.description.isValid}
            />
            <Button 
                type="submit"
                disabled={!formState.isValid}
                >UPDATE PLACE</Button>
    </form>
}

export default UpdatePlace;
