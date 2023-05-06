import React, { useEffect, useState } from 'react';
import styles from './CardList.module.css';
import { useTaskContext } from '../../../store/Context/TaskContext/TaskContext';
import TextForm from '../../Molecules/TextForm/TextForm';

// UseContextでtaskの情報をpropsで指定する
const CardList = () => {
  const { state, dispatch } = useTaskContext();
  const [value, setValue] = useState('');
  const [todolist, setTodolist] = useState([]);
  const [editStates, setEditStates] = useState([]);
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:8000/todo');
      const data = await response.json();
      setTodolist(data);
      setEditStates(data.map(() => false));
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
              {editStates[index] ? (
                <TextForm
                  {...inputForm}
                  onClick={() => {
                    dispatch({
                      type: 'UPDATE',
                      context: value,
                      id: parseInt(todo.id),
                    });
                    setEditStates((prevStates) => {
                      const newStates = [...prevStates];
                      newStates[index] = false; // 編集終了時にisEditをfalseに設定
                      return newStates;
                    });
                  }}
                  onClick2={() => {
                    dispatch({
                      type: 'CANCEL',
                      context: todo.task,
                      id: parseInt(todo.id),
                    });
                    setEditStates((prevStates) => {
                      const newStates = [...prevStates];
                      newStates[index] = false; // キャンセル時にisEditをfalseに設定
                      return newStates;
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
                    setEditStates((prevStates) => {
                      const newStates = [...prevStates];
                      newStates[index] = true; // 編集開始時にisEditをtrueに設定
                      return newStates;
                    });
                  }}
                  onClick2={() => {
                    dispatch({
                      type: 'DELETE',
                      context: todo.task,
                      id: todo.id,
                    });
                    // TODO: 削除時に値が特定できない場合も処理がstateの更新がされてしまうので対策が必要
                    setEditStates((prevStates) => {
                      const newStates = [...prevStates];
                      newStates.splice(index, 1); // 削除時に該当する値を削除
                      return newStates;
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
