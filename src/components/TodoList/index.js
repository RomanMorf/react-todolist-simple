import React from 'react';
import TodoItem from '../TodoItem';

function TodoList(props) {

  return (
    <ul>
      {props.todos.length ? 
        props.todos.map(todo => {
          return (
            <li key={todo.id}>
              <TodoItem todo={todo} key={todo.id}/>
            </li>
          )
        }): 
        <li className="center">Todo list is ampty... Add new Todo task</li>
      }
    </ul>
  )
}

export default TodoList