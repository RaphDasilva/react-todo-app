/* eslint-disable react/prop-types */
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import TodoApp from './components/TodoApp';

function App() {
  return (
    <div className="App">
      <Router>
        <TodoApp />
      </Router>
    </div>
  );
}

export default App;
