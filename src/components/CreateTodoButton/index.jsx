import React from 'react'
import './style.css'
import { TodoContext } from "../../Context/TodoContext";

function CreateTodoButton() {
  const {setOpenModal} = React.useContext(TodoContext)
  return (
    <button className='create-button' onClick={() => setOpenModal(state => !state)}></button>
  )
}

export {CreateTodoButton}