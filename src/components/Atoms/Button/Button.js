import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = (props) => {
  const { children, className, onClick } = props;
  return (
    <button className={styles[className]} onClick={onClick}>
      {children}
    </button>
  );
};

Button.propTypes = {};

Button.defaultProps = {};

export default Button;
