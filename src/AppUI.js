import { TodoCounter } from './components/TodoCounter';
import { TodoSearch } from './components/TodoSearch';
import { TodoList } from './components/TodoList';
import { TodoItem } from './components/TodoItem';
import { TodosLoading } from './components/TodosLoading';
import { TodosError } from './components/TodosError';
import { EmptyTodo } from './components/EmptyTodo';
import { CreateTodoButton } from './components/CreateTodoButton';

function AppUI ({
    loading,
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
    return (
        <div className='App'>
            <TodoCounter completed={completedTodos} total={totalTodos} loading={loading}/>
            <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue}/>

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
        </div>
    )
}

export { AppUI };