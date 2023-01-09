import { createContext, useReducer, useContext } from 'react';

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
  const reducer = (state, action) => {
    if (action === 'Delete') {
    } else {
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ state }}>{children}</TaskContext.Provider>
  );
}
