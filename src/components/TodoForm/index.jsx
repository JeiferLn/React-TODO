import React from 'react'
import './style.css'
import { TodoContext } from '../../Context/TodoContext'

function TodoForm() {
    const {onSubmit, onCancel, setNewTodoValue} = React.useContext(TodoContext)

    const onChange = (event) => {
        setNewTodoValue(event.target.value)
    }

    return (
        <div className='form-container'>
            <form onSubmit={onSubmit}>
                <label>Escribe tu nuevo TODO</label>
                <textarea placeholder='Sacar la Basura' cols="30" rows="10" onChange={onChange}></textarea>
                <button type="" className='button-form button-cancel' onClick={onCancel}>Cancelar</button>
                <button type="submit" className='button-form button-add'>Añadir</button>
            </form>
        </div>
    )
}

export { TodoForm }