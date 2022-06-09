import React, { useContext, useState } from 'react';
import { LocaleSelect, Radio, UserSettingsContext } from 'taulia-ui';
import { useTranslation } from 'react-i18next';

function HelloWorld() {
  const { i18n, t } = useTranslation();
  const { name } = useContext(UserSettingsContext);

  const [greetingType, setGreetingType] = useState('name');

  const changeLocale = locale => {
    // Make sure to set language from user preference API. Otherwise it will default to en-US on refresh
    i18n.changeLanguage(locale);
  };

  return (
    <div className="greetings">
      <h2>
        {t(
          greetingType === 'name' ? 'helloWorld.helloName' : 'helloWorld.title',
          {
            name,
          }
        )}
      </h2>
      <LocaleSelect
        locale={{ value: i18n.language }}
        updateLocale={changeLocale}
      />
      <div>
        <Radio
          aria-label="name"
          checked={greetingType === 'name'}
          onChange={event => setGreetingType(event.target.value)}
          value="name"
        >
          <span role="img" aria-label="woman emoji">
            🧍‍♀️
          </span>
        </Radio>
        <Radio
          aria-label="world"
          checked={greetingType === 'world'}
          onChange={event => setGreetingType(event.target.value)}
          value="world"
        >
          <span role="img" aria-label="world emoji">
            🌍
          </span>
        </Radio>
      </div>
    </div>
  );
}

export default HelloWorld;
