import React, {useState} from 'react';

import './index.scss'

function AddForm(props) {
  const [textForAdd, setTextForAdd] = useState('')

  function formHandle(e) {
    e.preventDefault()
    
    if (!textForAdd.trim()) {
      return
    }

    const newTodo = {
      id: Date.now(),
      title: textForAdd,
      userId: 1987,
      completed: false
    }

    props.onFormAction(newTodo)
    setTextForAdd('')
  }
  
  return (
    <div className='form-wrapper'>
      <form className='form-body'>
        <input 
          type='text' 
          placeholder='Enter search text...' 
          className='form-input'
          value={textForAdd}
          onChange={e => setTextForAdd(e.target.value)}
          onKeyUp={e => e.code === 'Enter'? formHandle : null}
        />
        <button 
          className='form-btn'
          onClick={formHandle}
        >Add task</button>
      </form>
    </div>
  )
}

export default AddForm;