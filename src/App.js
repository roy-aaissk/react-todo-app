import './App.css';
import Todo from './components/Pages/Todo/Todo';
import { TaskProvider } from './store/Context/TaskContext/TaskContext';

function App() {
  return (
    <div style={{ margin: '2em' }}>
      <TaskProvider>
        <Todo />
      </TaskProvider>
    </div>
  );
}

export default App;
