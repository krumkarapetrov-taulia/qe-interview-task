import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import UserSettingsProvider from '../../contexts/userSettingsProvider';
import Dashboard from './Dashboard';

describe('Dashboard', () => {
  test('shows an error and disables the submit button the inputs are empty', () => {
    const { queryByLabelText, queryByText } = render(
      <UserSettingsProvider>
        <Dashboard />
      </UserSettingsProvider>
    );
    const firstName = queryByLabelText('First Name');
    const submitButton = queryByText('Submit');
    fireEvent.change(firstName, { target: { value: '' } });
    fireEvent.blur(firstName);
    expect(queryByText('Required Field')).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    fireEvent.change(firstName, { target: { value: 'abc' } });
    expect(queryByText('Required Field')).not.toBeInTheDocument();

    const lastName = queryByLabelText('Last Name');
    fireEvent.change(lastName, { target: { value: '' } });
    fireEvent.blur(lastName);
    expect(queryByText('Required Field')).toBeInTheDocument();
    expect(submitButton).toBeDisabled();

    fireEvent.change(lastName, { target: { value: 'abc' } });
    expect(queryByText('Required Field')).not.toBeInTheDocument();
    expect(submitButton).not.toBeDisabled();
    fireEvent.click(submitButton);
  });
});
