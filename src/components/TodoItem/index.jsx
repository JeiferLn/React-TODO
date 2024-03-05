import React from 'react'
import './style.css'

function TodoItem({text, completed, onCompleted, onDelete}) {
  return (
    <li className='todo-item'>
      <button 
        className={`button button-check ${completed ? 'todoCompleted' : ''}`} onClick={onCompleted}></button>
      <p>{text}</p>
      <button className='button button-delete' onClick={onDelete}></button>
    </li>
  )
}

export {TodoItem}