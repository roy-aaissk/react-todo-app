import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  const { children, className } = props;
  return <button className={styles[className]}>{children}</button>;
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
