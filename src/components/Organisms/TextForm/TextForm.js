import React, { useState } from 'react';
import styles from './TextForm.module.css';
import TextField from '../../Atoms/TextField/TextField';
import Button from '../../Atoms/Button/Button';
import { useTaskContext } from '../../../store/Context/TaskContext/TaskContext';

const TextForm = () => {
  const { dispatch } = useTaskContext();
  const [value, setValue] = useState('');
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <div className={styles.TextForm}>
      <TextField onChange={handleChange} value={value} />
      <Button
        children='追加'
        className='add'
        onClick={() => {
          dispatch({ type: 'ADD', context: value });
          setValue('');
        }}
      />
      <Button
        children='キャンセル'
        className='cancel'
        onClick={() => {
          setValue('');
        }}
      />
    </div>
  );
};

export default TextForm;
