import React from 'react';
import PropTypes from 'prop-types';
import styles from './Card.module.css';
import Title from '../../Atoms/Title/Title';
import Button from '../../Atoms/Button/Button';
import Text from '../../Atoms/Text/Text';
import { useTaskContext } from '../../../store/Context/TaskContext/TaskContext';
// 渡ってきたPropsを振り分ける
const Card = () => {
  const { state, dispatch } = useTaskContext();
  return (
    <div className={styles.Card}>
      {state.map((tasks, index) => {
        return (
          <div key={index}>
            <Title children={tasks.task} />
            <Text />
            <Button children='修正' className='edit' />
            <Button
              children='削除'
              className='delete'
              onClick={() => {
                dispatch({ type: 'DELETE', context: tasks.task, id: tasks.id });
              }}
            />
          </div>
        );
      })}
    </div>
  );
};

Card.propTypes = {};

Card.defaultProps = {};

export default Card;
