import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import classNamesBind from 'classnames/bind';
import ThemeContext from 'terra-theme-context';
import styles from './MyPracticeComponent.module.scss';

const cx = classNamesBind.bind(styles);

const propTypes = {
  /**
   * Content to be displayed as the name
   */
  name: PropTypes.string,
};

const defaultProps = {
  name: 'default',
};

const MyPracticeComponent = ({ name, ...customProps }) => {
  const theme = React.useContext(ThemeContext);
  const MyPracticeComponentClassNames = classNames(
    cx([
      'MyPracticeComponent',
      theme.className,
    ]),
    customProps.className,
  );

  return (<button type="button" {...customProps} className={MyPracticeComponentClassNames}>{name}</button>);
};

MyPracticeComponent.propTypes = propTypes;
MyPracticeComponent.defaultProps = defaultProps;

export default MyPracticeComponent;
