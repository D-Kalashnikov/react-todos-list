import './App.css';
import Todos from '../src/components/todos/todos.js';

function App() {
  return (
    <div className="App">
        <div className="todos">
            <div className="todos-list">
                <Todos/>
            </div>
            <div className="todos-control"></div>
        </div>
    </div>
  );
}

export default App;
