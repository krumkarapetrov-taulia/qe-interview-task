/* eslint-disable react/no-array-index-key */
/* eslint-disable no-param-reassign */
const React = require('react');
const reactI18next = require('react-i18next');

const hasChildren = node =>
  node && (node.children || (node.props && node.props.children));

const getChildren = node =>
  node && node.children ? node.children : node.props && node.props.children;

const renderNodes = reactNodes => {
  if (!reactNodes) {
    return null;
  }
  if (typeof reactNodes === 'string') {
    return reactNodes;
  }

  return Object.keys(reactNodes).map((key, i) => {
    const child = reactNodes[key];
    const isElement = React.isValidElement(child);

    if (typeof child === 'string') {
      return child;
    }

    const childWithKey =
      Array.isArray(child) &&
      child.map(item => {
        if (React.isValidElement(item)) {
          return { ...item, key: i };
        }
        return item;
      });

    if (hasChildren(childWithKey)) {
      const inner = renderNodes(getChildren(childWithKey));
      return React.cloneElement(
        childWithKey,
        { ...childWithKey.props, key: i },
        inner
      );
    }

    if (typeof childWithKey === 'object' && !isElement) {
      return Object.keys(childWithKey).map(childKey => childWithKey[childKey]);
    }

    return childWithKey;
  });
};

const useMock = [k => k, {}];
useMock.t = k => k;
useMock.i18n = { changeLanguage: () => null, language: 'en-US' };

module.exports = {
  // this mock makes sure any components using the translate HoC receive the t function as a prop
  withTranslation: () => Component => {
    Component.defaultProps = {
      ...Component.defaultProps,
      t: x => x,
      i18n: { language: 'en-US', changeLanguage: () => null },
    };
    return Component;
  },
  Trans: props => renderNodes(props),
  Translation: ({ children }) => children(k => k, { i18n: {} }),
  useTranslation: () => useMock,

  // mock if needed
  I18nContext: reactI18next.I18nContext,
  I18nextProvider: reactI18next.I18nextProvider,
  initReactI18next: reactI18next.initReactI18next,
  setDefaults: reactI18next.setDefaults,
  getDefaults: reactI18next.getDefaults,
  setI18n: reactI18next.setI18n,
  getI18n: reactI18next.getI18n,
};
