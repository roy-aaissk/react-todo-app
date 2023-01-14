import React, { useState } from 'react';
import styles from './CardList.module.css';
import { useTaskContext } from '../../../store/Context/TaskContext/TaskContext';
import TextForm from '../../Molecules/TextForm/TextForm';

// UseContextでtaskの情報をpropsで指定する
const CardList = () => {
  const { state } = useTaskContext();
  const [value, setValue] = useState('');
  const [inputMode, setInputMode] = useState(false);
  const handleChange = () => {};
  const saveClick = (e) => {
    
  };
  const cancelClick = (e) => {
    setInputMode((e) => !e);
  };
  const fixClick = (e) => {
    setInputMode((e) => !e);
  };
  const deleteClick = () => {};
  // 入力Props
  const inputForm = {
    textMode: '',
    value: value,
    className: 'card',
    onChange: handleChange,
    children: '保存',
    color: 'save',
    onClick: saveClick,
    type: '',
    children2: 'キャンセル',
    color2: 'edit',
    onClick2: cancelClick,
    type2: 'button',
  };
  // テキストProps
  const textForm = {
    textMode: 'title',
    value: value,
    className: 'card',
    onChange: '',
    children: '修正',
    color: 'fix',
    onClick: fixClick,
    type: '',
    children2: '削除',
    color2: 'delete',
    onClick2: (e) => deleteClick(e),
    type2: '',
  };
  return (
    <div className={styles.CardList}>
      {/* sectionタグで囲む範囲 */}
      {state.length !== 0 &&
        state.map((todo, index) => {
          return (
            <div key={index}>
              {inputMode ? (
                <TextForm {...inputForm} />
              ) : (
                <TextForm {...textForm} textChildren={todo.task} />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default CardList;
