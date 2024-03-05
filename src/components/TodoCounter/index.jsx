import React from 'react'
import './style.css'
import { TodoContext } from '../../Context/TodoContext';

function TodoCounter () {
    const {totalTodos, completedTodos, loading} = React.useContext(TodoContext);

    return (
        totalTodos === completedTodos && totalTodos > 0 ? 
        <h1 className='todo-title'>
            ¡Has terminado todas tus tareas! 🥳🎉
        </h1> 
        : loading ? 
        <h1 className='todo-title'>
            Bienvenido a TODO's List 😃
        </h1>
        : totalTodos === 0 ?
            <h1>No tienes ninguna tarea pendiente</h1>
        : <h1 className='todo-title'>
            Has completado <span>{completedTodos}</span> de <span>{totalTodos}</span> tareas 🤔
        </h1> 

    )
}

export {TodoCounter}