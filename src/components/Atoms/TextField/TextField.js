import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.css';

const TextField = (props) => {
  const { value, className, onChange } = props;
  return (
    <textarea
      className={styles[className]}
      onChange={onChange}
      value={value}
    ></textarea>
  );
};

TextField.propTypes = {};

TextField.defaultProps = {};

export default TextField;
