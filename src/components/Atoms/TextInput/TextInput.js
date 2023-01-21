import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextInput.module.css';
const TextInput = (props) => {
  const { onChange, value, className, type, checked, placeholder } = props;
  return (
    <div className={styles.TextInput}>
      <input
        onChange={onChange}
        value={value}
        className={className}
        type={type}
        checked={checked}
        placeholder={placeholder}
      />
    </div>
  );
};

TextInput.propTypes = {};

TextInput.defaultProps = {};

export default TextInput;
