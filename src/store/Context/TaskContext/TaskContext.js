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
        // 削除するタスクをAPIで渡す
        state = result;
        return state;
      case 'ADD':
        return [
          ...state,
          { id: createUuid(), task: action.context, completed: false },
        ];
      case 'UPDATE':
        try {
          state
            .filter((e) => e.id === action.id)
            .forEach((e) => {
              e.isEdit = false;
              e.task = action.context;
            });
          result = state.filter((e) => e.id === action.id)[0];
          put(result);
        } catch (error) {
          throw new Error('値が更新できません。再度お試し下さい');
        }
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

async function put(body) {
  const parameter = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };

  await fetch(`http://localhost:8000/todo/${body.id}`, parameter).then(
    (response) => {
      return response.json();
    }
  );
}
