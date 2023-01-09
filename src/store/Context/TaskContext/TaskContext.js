import { createContext, useReducer, useContext } from 'react';

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
    switch (action.type) {
      case 'DELETE':
        let result = [];
        result = state.filter((e) => e.id !== action.id);
        console.log(result);
        // 削除するタスクをAPIで渡す
        state = result;
        return state;
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
