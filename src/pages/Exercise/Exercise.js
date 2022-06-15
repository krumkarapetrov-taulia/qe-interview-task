import React, { useState, useReducer } from 'react';
import {
  Button,
  Field,
  FieldErrorMap,
  FieldLabel,
  ListView,
  Text,
} from 'taulia-ui';
import ExerciseModal from './ExerciseModal';
import './Exercise.scss';

function Exercise() {
  const INITIAL_STATE = {
    name: '',
    email: '',
    role: '',
    errors: {},
  };
  const reducer = (prevState, updatedProperty) => ({
    ...prevState,
    ...updatedProperty,
  });
  const [employee, setEmployee] = useReducer(reducer, INITIAL_STATE);
  const resetInitialState = () => setEmployee({ ...INITIAL_STATE });

  const initialData = [
    {
      name: 'Jessica',
      email: 'jessica@taulia.com',
      role: 'Full Admin',
    },
    {
      name: 'Joe',
      email: 'joe@taulia.com',
      role: 'Payables Admin',
    },
    {
      name: 'John',
      email: 'john@taulia.com',
      role: 'Receivables Admin',
    },
  ];
  const [employeeList, setEmployeeList] = useState(initialData);

  const addEmployee = state => {
    setEmployeeList([...employeeList, { ...state }]);
  };

  const onInputChange = event => {
    const { name: key, value } = event.target;
    setEmployee({
      [key]: value,
      errors: { ...employee.errors, [key]: '' },
    });
  };

  const validateOnBlur = event => {
    const { name: key, value } = event.target;
    const emailTest =
      /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    let error;

    if (!value.length) {
      error = 'required';
    } else if (key === 'email' && !emailTest.test(value)) {
      error = 'email';
    }

    setEmployee({ errors: { ...employee.errors, [key]: error } });
  };

  const onSubmit = e => {
    e.preventDefault();
    addEmployee(employee);
    resetInitialState(employee);
  };

  const [openModal, setOpenModal] = useState(false);

  const isDisabled =
    !employee.name.length ||
    !employee.email.length ||
    !employee.role.length ||
    !!employee.errors.name ||
    !!employee.errors.email ||
    !!employee.errors.role;

  return (
    <div className="exercise">
      <div className="employee">
        <form onSubmit={onSubmit}>
          <Field validationState={employee.errors.name ? 'error' : null}>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Text
              id="name"
              name="name"
              value={employee.name}
              validationState={employee.errors.name ? 'error' : null}
              onChange={onInputChange}
              onBlur={validateOnBlur}
            />
            <FieldErrorMap code={employee.errors.name}>
              Required Field
            </FieldErrorMap>
          </Field>
          <Field validationState={employee.errors.email ? 'error' : null}>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Text
              id="email"
              name="email"
              value={employee.email}
              validationState={employee.errors.email ? 'error' : null}
              onChange={onInputChange}
              onBlur={validateOnBlur}
            />
            <FieldErrorMap code={employee.errors.email}>
              <span key="email">Invalid email</span>
              <span key="required">Required Field</span>
            </FieldErrorMap>
          </Field>
          <Field validationState={employee.errors.role ? 'error' : null}>
            <FieldLabel htmlFor="role">Role</FieldLabel>
            <Text
              id="role"
              name="role"
              value={employee.role}
              validationState={employee.errors.role ? 'error' : null}
              onChange={onInputChange}
              onBlur={validateOnBlur}
            />
            <FieldErrorMap code={employee.errors.role}>
              Required Field
            </FieldErrorMap>
          </Field>
          <Button
            disabled={isDisabled}
            className="submit"
            theme="primary"
            type="submit"
            size="sm"
          >
            Submit
          </Button>
        </form>
      </div>
      <ListView
        showColumnConfig={false}
        data={employeeList}
        columns={[
          { key: 'name', label: 'Name', type: 'TEXT' },
          { key: 'email', label: 'Email', width: 200, type: 'TEXT' },
          { key: 'role', label: 'Role', width: 200, type: 'TEXT' },
        ]}
        actionsEnabled
        actions={[
          {
            label: 'Open Modal',
            description: 'First Action Description',
            onClick: () => setOpenModal(true),
            allowEmptySelection: true,
          },
        ]}
      />
      <ExerciseModal
        numberOfEmployees={employeeList.length}
        open={openModal}
        onRequestClose={() => setOpenModal(false)}
      />
    </div>
  );
}

export default Exercise;
