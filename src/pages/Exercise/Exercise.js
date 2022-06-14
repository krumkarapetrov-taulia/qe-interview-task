/* eslint no-unused-vars: "warn" */
/* eslint no-undef: "warn" */
import React, { useState } from 'react';
import { Button, Field, FieldLabel, ListView, Modal, Text } from 'taulia-ui';
import './Exercise.scss';

function Exercise() {
  const INITIAL_STATE = {
    name: '',
    email: '',
    role: '',
  };
  const [employee, setEmployee] = useState(INITIAL_STATE);
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

  const setName = ({ value }) => {
    setEmployee({ ...employee, name: value });
  };
  const setEmail = ({ value }) => {
    setEmployee({ ...employee, email: value });
  };
  const setRole = ({ value }) => {
    setEmployee({ ...employee, role: value });
  };

  const onSubmit = e => {
    e.preventDefault();
    addEmployee(employee);
    resetInitialState(employee);
  };

  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="exercise">
      <div className="employee">
        <form onSubmit={onSubmit}>
          <Field>
            <FieldLabel htmlFor="name">Full Name</FieldLabel>
            <Text
              id="name"
              name="name"
              onChange={e =>
                setName({
                  value: e.target.value,
                })
              }
              value={employee.name}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="email">Email</FieldLabel>
            <Text
              id="email"
              name="email"
              onChange={e =>
                setEmail({
                  value: e.target.value,
                })
              }
              value={employee.email}
            />
          </Field>
          <Field>
            <FieldLabel htmlFor="role">Role</FieldLabel>
            <Text
              id="role"
              name="role"
              onChange={e =>
                setRole({
                  value: e.target.value,
                })
              }
              value={employee.role}
            />
          </Field>
          <Button className="submit" theme="primary" type="submit" size="sm">
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
      <Modal
        header="Example Modal"
        footerActions={[
          {
            title: 'Cancel',
            theme: 'text',
            onClick: () => setOpenModal(false),
          },
          {
            title: 'Save',
            theme: 'primary',
          },
        ]}
        width={800}
        onRequestClose={() => setOpenModal(false)}
        open={openModal}
      >
        <p>This is example of a modal!</p>
      </Modal>
    </div>
  );
}

export default Exercise;
