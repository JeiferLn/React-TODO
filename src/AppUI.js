import React from 'react';
import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodo } from './components/EmptyTodo';
import { CreateTodoButton } from './components/CreateTodoButton';
import { TodoContext } from './Context/TodoContext';
import { Modal } from './Modal/ModalCreateTodo';
import { TodoForm } from './components/TodoForm';

function AppUI () {
    const {loading, searchedTodos, completeTodo, deleteTodo, openModal} = React.useContext(TodoContext);
    return (
        <div className='App'>
            <TodoCounter />
            <TodoSearch />

            <TodoList>
                {loading && 
                    <>
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                        <TodosLoading />
                    </>
                }
                {(!loading && searchedTodos.length < 0) && <TodosError />}
                {(!loading && searchedTodos.length === 0) && <EmptyTodo />}
                {searchedTodos.map(todo => (
                <TodoItem 
                    key={todo.text} 
                    text={todo.text} 
                    completed={todo.completed}
                    onCompleted={() => completeTodo(todo.text)}
                    onDelete={() => deleteTodo(todo.text)}
                />
                ))}
            </TodoList>

            <CreateTodoButton />

            {openModal && (
                <Modal>
                    <TodoForm />
                </Modal>
            )}

        </div>
    )
}

export { AppUI };
