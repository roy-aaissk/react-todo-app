import React from 'react';
import styles from './Todo.module.css';
import TopContents from '../../Templates/TopContents/TopContents';
import MainContexts from '../../Templates/MainContents/MainContents';

const Todo = () => (
  <div className={styles.Todo}>
    {/* pageで使うstyleを指定 */}
    {/* TodoTitle */}
    <TopContents />

    {/* AddTodo */}
    {/* TodoList 編集削除完了チェックができる*/}
    <MainContexts />
  </div>
);

Todo.propTypes = {};

Todo.defaultProps = {};

export default Todo;
