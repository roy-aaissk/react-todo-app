import { createContext, useReducer, useContext } from 'react';
import createUuid from '../../../util';

const TaskContext = createContext();

const initialState = [
  {
    id: 1,
    task: 'Learn vue.js',
    isCompleted: false,
  },
  {
    id: 2,
    task: 'Learn React Hook',
    isCompleted: false,
  },
  {
    id: 3,
    task: 'Learn Gatsby.js',
    isCompleted: false,
  },
];

export function useTaskContext() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const reducer = (state, action) => {
    let result = [];
    switch (action.type) {
      case 'DELETE':
        result = state.filter((e) => e.id !== action.id);
        console.log(result);
        // 削除するタスクをAPIで渡す
        state = result;
        return state;
      case 'ADD':
        return [
          ...state,
          { id: createUuid(), task: action.context, completed: false },
        ];
      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TaskContext.Provider value={{ state, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
}
