import { createContext, useReducer, useContext } from 'react';
import createUuid from '../../../util';

const TaskContext = createContext();

const initialState = [];

export function useTaskContext() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const reducer = (state, action) => {
    let result = [];
    switch (action.type) {
      case 'FETCH_SUCCESS':
        return action.context;
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
          .forEach((e) => {
            e.isEdit = false;
            e.task = action.context;
          });
        return [...state];
      case 'EDIT':
        result = state
          .filter((e) => e.id === action.id)
          .forEach((e) => (e.isEdit = true));

        return [...state];
      case 'CANCEL':
        result = state
          .filter((e) => e.id === action.id)
          .forEach((e) => (e.isEdit = false));
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
