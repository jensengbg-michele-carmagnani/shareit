import React from 'react';
import Input from '../../shared/components/UI/Input/Input.js';
import { VALIDATOR_REQUIRE } from '../../shared/utils/validators';
import './NewPlace.css';
const NewPlace = () => {
  return (
    <form className="place-form">
      <Input
        element="input"
        type="text"
        lable="Tile"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
      />
    </form>
  );
};

export default NewPlace;
