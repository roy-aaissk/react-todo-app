import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextField.module.css';

const TextField = (props) => {
  const { children, className, onChange } = props;
  return (
    <textarea className={styles[className]} onChange={onChange}>
      {children}
    </textarea>
  );
};

TextField.propTypes = {};

TextField.defaultProps = {};

export default TextField;
