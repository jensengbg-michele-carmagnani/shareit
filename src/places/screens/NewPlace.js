import React, { useCallback } from 'react';
import Input from '../../shared/components/UI/Input/Input.js';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/utils/validators';
import './NewPlace.css';
const NewPlace = () => {
  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);
  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        lable="Tile"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={titleInputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        lable="Tile"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description(min 5 characters)"
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
