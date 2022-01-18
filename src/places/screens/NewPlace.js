import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/UI/Input/Input.js';
import Button from '../../shared/FormElement/Button/Button';
import {
  VALIDATOR_REQUIRE,
  VALIDATOR_MINLENGTH,
} from '../../shared/utils/validators';
import './NewPlace.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CAHNGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }
      return {
        ...state,
        input: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
          isValid: formIsValid,
        },
      };
    default:
      return state;
  }
};

const NewPlace = () => {
  // @ts-ignore
  const [formState, dispatch] = useReducer(formReducer, {
    inputs: {
      title: { value: '', isValid: false },
      description: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const inputHandler = useCallback((id, value, isValid) => {
    console.log('inputHandler')
    // @ts-ignore
    dispatch({
      type: 'INPUT_CHANGE',
      value: value,
      isValid: isValid,
      inputId: id,
    });
  }, []);
  console.log(formState.isValid)

  return (
    <form className="place-form">
      <Input
        id="title"
        element="input"
        type="text"
        lable="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title"
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        type="text"
        lable="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description(min 5 characters)"
        onInput={inputHandler}
      />
      <Button type="submit" disabled={!formState.isValid}>
        ADD PLACE
      </Button>
    </form>
  );
};

export default NewPlace;
