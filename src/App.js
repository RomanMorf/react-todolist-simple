import React, { useEffect, useState } from 'react';
import TodoContext from './context/TodoContext';
import Header from './components/Header';
import AddForm from './components/AddForm';
import TodoList from './components/TodoList';

function App() {
  const [todosList, setTodosList] = useState([])
  const [showDone, setShowDone] = useState(false)
  
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=10')
      .then(response => response.json())
      .then(todos => setTodosList(todos))
  }, [])

  function addTodo(todo) {
    todosList.push(todo)
    const todosListEdited = todosList.map(todo => todo)
    setTodosList(todosListEdited)
  }

  function deleteTodo(id) {
    const idx = todosList.findIndex(todo => todo.id === id)
    todosList.splice(idx, 1)
    const todosListEdited = todosList.map(todo => todo)
    setTodosList(todosListEdited)
  }

  function completedToggle(id) {
    const idx = todosList.findIndex(todo => todo.id === id)
    todosList[idx].completed = !todosList[idx].completed
    const todosListEdited = todosList.map(todo => todo)
    setTodosList(todosListEdited)
  }

  return (      
    <div className="container">
      <Header/>
      <AddForm onFormAction={ addTodo }/>
      <button onClick={() => setShowDone(!showDone)}>
        { showDone ? 'Show all' : 'Show done'}
      </button>
      <TodoContext.Provider value={{ completedToggle, deleteTodo }}>
      <TodoList todos={ showDone ? todosList.filter(todo => todo.completed === true) : todosList }/>
      </TodoContext.Provider>
    </div>
  );
}

export default App;
