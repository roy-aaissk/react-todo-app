import React from 'react';
// import PropTypes from 'prop-types';
import styles from './Title.module.css';

const Title = (props) => {
  const { children, className } = props;
  return <div className={styles[className]}>{children}</div>;
};

Title.propTypes = {};

Title.defaultProps = {};

export default Title;
