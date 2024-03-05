import React from 'react'
import './style.css'

function TodoCounter ({total, completed, loading}) {
    return (
        total === completed && total > 0 ? 
        <h1 className='todo-title'>
            ¡Has terminado todas tus tareas! 🥳🎉
        </h1> 
        : loading ? 
        <h1 className='todo-title'>
            Bienvenido a TODO's List 😃
        </h1>
        : total === 0 ?
            <h1>No tienes ninguna tarea pendiente</h1>
        : <h1 className='todo-title'>
            Has completado <span>{completed}</span> de <span>{total}</span> tareas 🤔
        </h1> 

    )
}

export {TodoCounter}