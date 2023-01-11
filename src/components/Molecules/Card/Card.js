import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import Title from '../../Atoms/Title/Title';
import Button from '../../Atoms/Button/Button';
import Text from '../../Atoms/Text/Text';
import TextInput from '../../Atoms/TextInput/TextInput';
import { useTaskContext } from '../../../store/Context/TaskContext/TaskContext';
// 渡ってきたPropsを振り分ける
const Card = () => {
  const { state, dispatch } = useTaskContext();
  const [inputMode, setInputMode] = useState(false);
  const handleChange = () => {
    setInputMode((e) => !e);
  };
  return (
    <div className={styles.Card}>
      {state.map((tasks, index) => {
        return (
          <div key={index}>
            {inputMode && (
              <>
                <TextInput />
                <Button children='保存' className='save' />
                <Button children='キャンセル' className='edit' />
              </>
            )}

            {!inputMode && (
              <>
                <Title children={tasks.task} />
                <Text />
                <Button
                  children='修正'
                  className='edit'
                  onClick={handleChange}
                />
                <Button
                  children='削除'
                  className='delete'
                  onClick={() => {
                    dispatch({
                      type: 'DELETE',
                      context: tasks.task,
                      id: tasks.id,
                    });
                  }}
                />
              </>
            )}
          </div>
        );
      })}
    </div>
  );
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
