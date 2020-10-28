import './App.css';
import BoxList from './BoxList';
import TodoList from './TodoList';

function App() {
  return (
    <div className="App">
      <TodoList />
      <h1>Color Box Maker!</h1>
      <BoxList />
    </div>
  );
}

export default App;
