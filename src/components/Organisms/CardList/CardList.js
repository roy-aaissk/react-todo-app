import React from 'react';
import PropTypes from 'prop-types';
import styles from './CardList.module.css';
import Card from '../../Molecules/Card/Card';
import { useTaskContext } from '../../../store/Context/TaskContext/TaskContext';

// UseContextでtaskの情報をpropsで指定する
const CardList = () => {
  const { state } = useTaskContext();
  return (
    <div className={styles.CardList}>
      {/* sectionタグで囲む範囲 */}
      {state.length !== 0 && <Card />}
    </div>
  );
};

CardList.propTypes = {};

CardList.defaultProps = {};

export default CardList;
