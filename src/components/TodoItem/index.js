import React, {useContext} from 'react';
import './index.scss'
import TodoContext from '../../context/TodoContext';

function TodoItem ({todo}) {
  const {completedToggle, deleteTodo} = useContext(TodoContext)
  
  return (
    <div className="todo">
      <input type='checkbox' className="todo-checkbox" checked={todo.completed}  onChange={() => completedToggle(todo.id)}/>
      <span className={`todo-text ${todo.completed ? 'todo-completed' : ''}`}>{todo.title} </span>
      <button className="todo-btn" onClick={() => deleteTodo(todo.id)}>delete todo</button>
    </div>
  )
}

export default TodoItem