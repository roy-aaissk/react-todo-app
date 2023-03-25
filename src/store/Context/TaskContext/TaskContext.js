import { createContext, useReducer, useContext } from 'react';
import createUuid from '../../../util';

const TaskContext = createContext();

const initialState = [
  {
    id: 1,
    task: 'Learn vue.js',
    isCompleted: false,
    isEdit: false,
  },
  {
    id: 2,
    task: 'Learn React Hook',
    isCompleted: false,
    isEdit: false,
  },
  {
    id: 3,
    task: 'Learn Gatsby.js',
    isCompleted: false,
    isEdit: false,
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
      case 'UPDATE':
        result = state
          .filter((e) => e.id === action.id)
          .foreach((e) => {
            e.isEdit = false;
            e.task = action.context;
          });
        return [...state];
      case 'EDIT':
        result = state
          .filter((e) => e.id === action.id)
          .foreach((e) => {
            e.isEdit = true;
          });
        return [...state];
      case 'CANCEL':
        result = state
          .filter((e) => e.id === action.id)
          .foreach((e) => {
            e.isEdit = false;
          });
        return [...state];
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
