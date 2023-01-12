import React from 'react';
import styles from './TextForm.module.css';
import Button from '../../Atoms/Button/Button';
import TextInput from '../../Atoms/TextInput/TextInput';
import Title from '../../Atoms/Title/Title';

const TextForm = (props) => {
  const {
    textMode,
    value,
    className,
    textChildren,
    onChange,
    children,
    color,
    onClick,
    type,
    children2,
    color2,
    onClick2,
    type2,
  } = props;
  return (
    <div className={styles.TextForm}>
      {textMode === 'title' ? (
        <Title
          onChange={onChange}
          value={value}
          className={className}
          children={textChildren}
        />
      ) : (
        <TextInput onChange={onChange} value={value} className={className} />
      )}
      <Button
        children={children}
        className={color}
        onClick={onClick}
        type={type}
      />
      <Button
        children={children2}
        className={color2}
        onClick={onClick2}
        type={type2}
      />
    </div>
  );
};

export default TextForm;
