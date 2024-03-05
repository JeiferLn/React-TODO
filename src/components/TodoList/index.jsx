import React from 'react'
import './style.css'

function TodoList({ children }) {
  return (
    <ul className='todo-list'>
      {children}
    </ul>
  )
}

export {TodoList}