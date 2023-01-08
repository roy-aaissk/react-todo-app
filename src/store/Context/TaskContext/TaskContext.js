import { createContext, useState, useContext } from 'react';

const TaskContext = createContext();

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

export function useTaskContext() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [task, setTask] = useState(initialState);

  const value = {
    task,
    setTask,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
}
