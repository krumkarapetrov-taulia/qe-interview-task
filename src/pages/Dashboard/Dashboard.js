import React, { useContext, useReducer } from 'react';
import {
  Button,
  Field,
  FieldErrorMap,
  FieldLabel,
  Text,
  UserSettingsContext,
} from 'taulia-ui';

function Dashboard() {
  const { name, setName } = useContext(UserSettingsContext);

  const INITIAL_STATE = {
    firstName: '',
    lastName: '',
    errors: {},
  };

  const reducer = (prevState, updatedProperty) => ({
    ...prevState,
    ...updatedProperty,
  });

  const [state, setState] = useReducer(reducer, INITIAL_STATE);

  const handleInputChange = e => {
    const { name: key, value } = e.target;
    setState({
      [key]: value,
      errors: { ...state.errors, [key]: '' },
    });
  };

  const onSubmit = e => {
    e.preventDefault();
    setName(`${state.firstName} ${state.lastName}`);
    setState(INITIAL_STATE);
  };

  const validateOnBlur = event => {
    const { name: key, value } = event.target;
    let error;
    if (!value.length) {
      error = 'required';
    }
    setState({ errors: { ...state.errors, [key]: error } });
  };

  const isDisabled = !state.firstName.length || !state.lastName.length;

  return (
    <form onSubmit={onSubmit}>
      <p>Welcome to the Taulia template app, {name}!</p>
      <Field validationState={state.errors.firstName ? 'error' : null}>
        <FieldLabel htmlFor="first-name">First Name</FieldLabel>
        <Text
          id="first-name"
          validationState={state.errors.firstName ? 'error' : null}
          value={state.firstName}
          name="firstName"
          onChange={handleInputChange}
          onBlur={validateOnBlur}
        />
        <FieldErrorMap code={state.errors.firstName}>
          Required Field
        </FieldErrorMap>
      </Field>
      <Field validationState={state.errors.lastName ? 'error' : null}>
        <FieldLabel htmlFor="last-name">Last Name</FieldLabel>
        <Text
          id="last-name"
          validationState={state.errors.lastName ? 'error' : null}
          value={state.lastName}
          name="lastName"
          onChange={handleInputChange}
          onBlur={validateOnBlur}
        />
        <FieldErrorMap code={state.errors.lastName}>
          Required Field
        </FieldErrorMap>
      </Field>
      <Button disabled={isDisabled} theme="primary" type="submit">
        Submit
      </Button>
    </form>
  );
}

export default Dashboard;
