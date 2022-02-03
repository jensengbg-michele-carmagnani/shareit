import React, { useCallback, useReducer } from 'react';

import Input from '../../shared/components/UI/Input/Input';
import Button from '../../shared/FormElement/Button/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/utils/validators';
import './PlaceForm.css';
import { useForm } from '../../shared/hooks/form-hooks';

const NewPlace = () => {
  const [formState, inputHandler]= useForm(
    {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
      address: {
        value: '',
        isValid: false,
      },
    },
    false
  );



  const placeSubmitionHandler = (event) => {
    event.preventDefault();
    //TODO: send information later to backend
    //*@parms
    //!
    //?
    
  };

  return (
    <form className="place-form" onSubmit={placeSubmitionHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="input"
        label="Address"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid address"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
