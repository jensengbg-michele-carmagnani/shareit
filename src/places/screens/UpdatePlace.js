import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Input from '../../shared/components/UI/Input/Input';
import Button from '../../shared/FormElement/Button/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/utils/validators';
import './PlaceForm.css';

import { useForm } from '../../shared/hooks/form-hooks';

const PLACES = [
  {
    id: 'p1',
    title: 'Empire state building',
    description: 'One of the most famous places in the world',
    imageUrl:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Manhattan_at_Dusk_by_slonecker.jpg/300px-Manhattan_at_Dusk_by_slonecker.jpg',
    address: '20 W 34th St, New York, NY 10001, Stati Uniti',
    location: {
      lat: +'40.7484405',
      lng: parseFloat('-73.9878531,17'),
    },
    creator: 'u1',
  },
  {
    id: 'p2',
    title: 'Empire state building',
    description: 'One of the most famous places in the world',
    imageUrl:
      'https://image.newyork.se/wp-content/uploads/2013/02/Empire-State-Building-Tickets.jpg',
    address: '20 W 34th St, New York, NY 10001, Stati Uniti',
    location: {
      lat: +'40.7484405',
      lng: parseFloat('-73.9878531,17'),
    },
    creator: 'u2',
  },
  {
    id: 'p3',
    title: 'Empire state building',
    description: 'One of the most famous places in the world',
    imageUrl:
      'https://image.newyork.se/wp-content/uploads/2013/02/Empire-State-Building-Tickets.jpg',
    address: '20 W 34th St, New York, NY 10001, Stati Uniti',
    location: {
      lat: +'40.7484405',
      lng: parseFloat('-73.9878531,17'),
    },
    creator: 'u3',
  },
];
const UpdatePlace = () => {
  const { id } = useParams();
  const [isLoading, setIsloading] = useState(true);
  const idetifyPlace = PLACES.find((p) => p.id === id);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const placeUpdateSubmitHandler = (e) => {
    e.preventDefault();
  };
  useEffect(() => {
    setFormData(
      {
        title: {
          value: idetifyPlace.title,
          isValid: true,
        },
        description: {
          value: idetifyPlace.description,
          isValid: true,
        },
      },
      true
    );
    setIsloading(false);
  }, [setFormData, idetifyPlace]);

  if (!idetifyPlace) {
    return (
      <div>
        <h1 className="center">Could not find place!</h1>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div>
        <h2>Loading ...</h2>
      </div>
    );
  }
  return (
    formState.inputs.title.value && (
      <form onSubmit={placeUpdateSubmitHandler} className="place-form">
        <Input
          id="title"
          element="input"
          type="text"
          label="Title"
          validators={[VALIDATOR_REQUIRE()]}
          errorText="Please enter a valid title."
          onInput={inputHandler}
          initialValue={formState.inputs.title.value}
          initialValid={formState.inputs.title.isValid}
        />
        <Input
          id="description"
          element="textarea"
          label="Description"
          validators={[VALIDATOR_MINLENGTH(5)]}
          errorText="Please enter a valid description ( min 5 characters)."
          onInput={inputHandler}
          initialValue={formState.inputs.description.value}
          initialValid={formState.inputs.description.isValid}
        />
        <Button type="submit" disabled={!formState.isValid}>
          UPDATE PLACE
        </Button>
      </form>
    )
  );
};

export default UpdatePlace;
