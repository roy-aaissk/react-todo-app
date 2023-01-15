import React from 'react';
import styles from './TextForm.module.css';
import Button from '../../Atoms/Button/Button';
import TextInput from '../../Atoms/TextInput/TextInput';
import Title from '../../Atoms/Title/Title';

const TextForm = (props) => {
  const {
    textMode,
    textValue,
    className,
    textChildren,
    onChange,
    children,
    color,
    onClick,
    type,
    buttonValue,
    children2,
    color2,
    onClick2,
    type2,
    buttonValue2,
  } = props;
  return (
    <div className={styles.TextForm}>
      {textMode === 'title' ? (
        <Title
          onChange={onChange}
          value={textValue}
          className={className}
          children={textChildren}
        />
      ) : (
        <TextInput
          onChange={onChange}
          value={textValue}
          className={className}
        />
      )}
      <Button
        children={children}
        className={color}
        onClick={onClick}
        type={type}
        value={buttonValue}
      />
      <Button
        children={children2}
        className={color2}
        onClick={onClick2}
        type={type2}
        value={buttonValue2}
      />
    </div>
  );
};

export default TextForm;
