import React, { useEffect, useState } from 'react';
import styles from './CardList.module.css';
import { useTaskContext } from '../../../store/Context/TaskContext/TaskContext';
import TextForm from '../../Molecules/TextForm/TextForm';

// UseContextでtaskの情報をpropsで指定する
const CardList = () => {
  const { state, dispatch } = useTaskContext();
  const [value, setValue] = useState('');
  const [todolist, setTodolist] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/todo');
      const data = await response.json();
      setTodolist(data);
    }
    fetchData();
  }, []);

  useEffect(() => {
    if (todolist) {
      dispatch({ type: 'FETCH_SUCCESS', context: todolist });
    }
  }, [todolist, dispatch]);
  // 入力Props
  const inputForm = {
    textMode: '',
    value: value,
    className: 'card',
    onChange: handleChange,
    children: '保存',
    color: 'save',
    type: '',
    children2: 'キャンセル',
    color2: 'edit',
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
    type: '',
    children2: '削除',
    color2: 'delete',
    type2: '',
  };
  return (
    <div className={styles.CardList}>
      {/* sectionタグで囲む範囲 */}
      {state.length !== 0 &&
        state.map((todo, index) => {
          return (
            <div key={index}>
              {todo.isEdit ? (
                <TextForm
                  {...inputForm}
                  onClick={(e) => {
                    dispatch({
                      type: 'UPDATE',
                      context: value,
                      id: parseInt(todo.id),
                    });
                  }}
                  onClick2={() => {
                    dispatch({
                      type: 'CANCEL',
                      context: todo.task,
                      id: parseInt(todo.id),
                    });
                  }}
                />
              ) : (
                <TextForm
                  {...textForm}
                  textChildren={todo.task}
                  onClick={() => {
                    dispatch({
                      type: 'EDIT',
                      context: todo.task,
                      id: parseInt(todo.id),
                    });
                  }}
                  onClick2={() => {
                    dispatch({
                      type: 'DELETE',
                      context: todo.task,
                      id: todo.id,
                    });
                  }}
                />
              )}
            </div>
          );
        })}
    </div>
  );
};

export default CardList;
