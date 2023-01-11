import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import Title from '../../Atoms/Title/Title';
import Button from '../../Atoms/Button/Button';
import Text from '../../Atoms/Text/Text';
import TextInput from '../../Atoms/TextInput/TextInput';
import { useTaskContext } from '../../../store/Context/TaskContext/TaskContext';
// 渡ってきたPropsを振り分ける
const Card = (props) => {
  const { dispatch } = useTaskContext();
  const { todo } = props;
  const [inputMode, setInputMode] = useState(false);
  const handleChange = () => {
    setInputMode((e) => !e);
  };
  return (
    <div className={styles.Card}>
      {inputMode && (
        <>
          <TextInput />
          <Button children='保存' className='save' />
          <Button children='キャンセル' className='edit' />
        </>
      )}

      {!inputMode && (
        <>
          <Title children={todo.task} />
          <Text />
          <Button children='修正' className='edit' onClick={handleChange} />
          <Button
            children='削除'
            className='delete'
            onClick={() => {
              dispatch({
                type: 'DELETE',
                context: todo.task,
                id: todo.id,
              });
            }}
          />
        </>
      )}
    </div>
  );
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
