import React from 'react';
import PropTypes from 'prop-types';
import styles from './TextForm.module.css';
import TextField from '../../Atoms/TextField/TextField';
import Button from '../../Atoms/Button/Button';

const TextForm = () => (
  <div className={styles.TextForm}>
    <TextField />
    <Button children='追加' className='add' />
    <Button children='キャンセル' className='cancel' />
  </div>
);

TextForm.propTypes = {};

TextForm.defaultProps = {};

export default TextForm;
