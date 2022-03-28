import { useState } from 'react';
import './App.css';
import './font-awesome-4.7.0/css/font-awesome.css'
import AddTodo from './components/AddTodo';
import Todos from './components/Todos';


function App() {
  const [todos, setTodo] = useState([
    {
      id: 1,
      title: 'Go for Jogging',
      completed: true
    },
    {
      id: 2,
      title: 'See my Dentist',
      completed: false
    },
    {
      id: 3,
      title: 'Watch the second Tutorial on react',
      completed: false
    },
    {
      id: 4,
      title: 'Learn Redux',
      completed: false
    }
  ])

  const toggleTheme = () => {
    let app = document.querySelector(".app");
    let header = document.querySelector('.header')
    let icon = document.querySelector('.fa')
    
    app.classList.toggle("darkmode");
    if (app.classList.contains('darkmode')) {
      icon.classList.add('fa-sun-o')
    }
    console.log(app.classList);
    console.log(header.classList);
  };

  const addNewTodo = (todo) => {
    let id = Math.floor(Math.random() * 10000) + 1
    let completed = false
    let newTodo = { id, ...todo, completed }
    setTodo([...todos, newTodo])
    console.log(newTodo);
  }

  const onCompleted = (id) => {
    setTodo(todos.map(t => t.id === id ? {...t, completed: !t.completed} : t))
  }

  const completed = () => {
    let filtered = todos.filter(t => t.completed === true)
    setTodo([...filtered])
  }

  const clearCompleted = () => {
    let filtered = todos.filter(t => t.completed !== true)
    setTodo([...filtered])
  }

  const completedCount = () => {
    return todos.filter(todo => todo.completed === false).length
  }

  return (
    <div className="app darkmode d-flex">
      <header className='header'>
        <h1 style={{marginRight: '15rem'}}>TODO</h1>
        <p onClick={toggleTheme}><i className='fa fa-sun-o fa-2x' style={{cursor: 'pointer'}}></i></p>
      </header>
      <AddTodo onAdd={addNewTodo} />
      <Todos todos={todos} completed={onCompleted} allCompleted={completed} onTodoLeft={completedCount()} clearCompleted={clearCompleted} />
    </div>
  );
}

export default App;
