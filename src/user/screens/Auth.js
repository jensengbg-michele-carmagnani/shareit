import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../shared/contex/auth-context';
import Input from '../../shared/components/UI/Input/Input';
import Button from '../../shared/FormElement/Button/Button';

import {
  VALIDATOR_EMAIL,
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from '../../shared/utils/validators.js';
import Card from '../../shared/components/UI/Card/Card';
import './Auth.css';
import { useForm } from '../../shared/hooks/form-hooks';

const Auth = () => {
  const navigate = useNavigate();
  const auth = useContext(AuthContext);
  console.log('AUTH', auth);
  const [isLogginMode, setIsLogginMode] = useState(true);
  const [formState, inputHandler, setFromData] = useForm(
    {
      email: {
        value: '',
        isValid: false,
      },
      password: {
        value: '',
        isValid: false,
      },
    },
    false
  );

  const authSubmitHandler = (e) => {
    e.preventDefault();
    auth.login();
    navigate('/user');
  };
  const switchModeHandler = () => {
    if (!isLogginMode) {
      setFromData(
        {
          ...formState.inputs,
          name: undefined,
        },
        formState.inputs.email,
        formState.inputs.password
      );
    } else {
      setFromData(
        {
          ...formState.inputs,
          name: {
            value: '',
            isValid: false,
          },
        },
        false
      );
    }
    setIsLogginMode((prevMode) => !prevMode);
  };
  return (
    <Card className="authentication">
      <h2>Login Required</h2> <hr />
      <form onSubmit={authSubmitHandler}>
        {!isLogginMode && (
          <Input
            type="text"
            id="name"
            label="Your Name"
            element="input"
            validators={[VALIDATOR_REQUIRE()]}
            errorText="Please enter a name"
            onInput={inputHandler}
          />
        )}
        <Input
          id="email"
          element="input"
          type="email"
          label="E-mail"
          validators={[VALIDATOR_EMAIL()]}
          errorText="Please enter a valid email address."
          onInput={inputHandler}
        />
        <Input
          id="password"
          element="input"
          type="password"
          label="Password"
          validators={[VALIDATOR_MINLENGTH(6)]}
          errorText="Please enter a valid password."
          onInput={inputHandler}
        />
        <Button type="submit" disabled={!formState.isValid}>
          {isLogginMode ? 'LOGIN' : 'SIGNUP'}
        </Button>
      </form>
      <Button inverse onClick={switchModeHandler}>
        SWITCH TO {isLogginMode ? 'SIGNUP' : 'LOGIN'}
      </Button>
    </Card>
  );
};

export default Auth;
