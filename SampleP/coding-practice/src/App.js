import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Toggle from './components/Toggle';
import TodoList from './components/TodoList';

function App() {
  return (
    <div className="App">
      <Counter />
      <Toggle />
      <TodoList />

    </div>
  );
}

export default App;
