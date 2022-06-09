import React, { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { UserSettingsContext } from 'taulia-ui';

function UserSettingsProvider({ children }) {
  const [name, setName] = useState('Big Jared');
  const memoName = useMemo(
    () => ({
      name,
      setName,
    }),
    [name]
  );

  return (
    <UserSettingsContext.Provider value={memoName}>
      {children}
    </UserSettingsContext.Provider>
  );
}

UserSettingsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserSettingsProvider;
