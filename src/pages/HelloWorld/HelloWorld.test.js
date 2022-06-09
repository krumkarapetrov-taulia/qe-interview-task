import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import HelloWorld from './HelloWorld';
import UserSettingsProvider from '../../contexts/userSettingsProvider';

describe('Hello world', () => {
  test('shows the business unit select if restrictions are selected and updates restrictions', () => {
    const { queryByLabelText, queryByText } = render(
      <UserSettingsProvider name="">
        <HelloWorld />
      </UserSettingsProvider>
    );
    const worldRadio = queryByLabelText('world');
    fireEvent.click(worldRadio);
    expect(queryByText('helloWorld.title')).toBeInTheDocument();

    const nameRadio = queryByLabelText('name');
    fireEvent.click(nameRadio);
    expect(queryByText('helloWorld.helloName')).toBeInTheDocument();
  });
});
