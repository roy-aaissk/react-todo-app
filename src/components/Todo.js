import { useState, useEffect } from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

const Todo = () => {
  const initialState = [
    {
      task: 'Learn vue.js',
      isCompleted: false,
    },
    {
      task: 'Learn React Hook',
      isCompleted: false,
    },
    {
      task: 'Learn Gatsby.js',
      isCompleted: false,
    },
  ];

  const [todos, setTodos] = useState(initialState);
  // get API
  const baseUrl = 'http://localhost:8080';
  useEffect(() => {
    (async () => {
      const response = await fetch(`${baseUrl}/v1/todo`, { method: 'POST' });
      const data = await response.json();
      console.log(data);
    })();
  }, []);

  return (
    <div>
      <h1>ToDo List</h1>
      <AddTodo setTodos={setTodos} />
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
};

export default Todo;
