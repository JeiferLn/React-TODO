import React from "react";
import { useLocalStorage } from "../../hooks/useLocalStoraje";

const TodoContext = React.createContext();

function TodoProvider({ children }){

  const {
    item: todos,
    saveItems: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = React.useState('');

  const [openModal, setOpenModal] = React.useState(false);

  const [newTodoValue, setNewTodoValue] = React.useState('');

  const completedTodos = todos.filter(todo => !!todo.completed).length;

  const totalTodos = todos.length;

  const searchedTodos = todos.filter(
    (todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }
  );

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = newTodos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos);
  } 
  
  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      text: text,
      completed: false
    })
    saveTodos(newTodos)
  }

  const onSubmit = (event) => {
    event.preventDefault();
    addTodo(newTodoValue)
    setOpenModal(false)
  }

  const onCancel = () => {
      setOpenModal(false)
  }
    
  return (
      <TodoContext.Provider value={{
          loading,
          error,
          completedTodos,
          totalTodos,
          searchValue,
          setSearchValue,
          searchedTodos,
          completeTodo,
          deleteTodo,
          openModal,
          setOpenModal,
          onSubmit,
          onCancel,
          setNewTodoValue
      }}>
          {children}
      </TodoContext.Provider>
  )
}


export { TodoContext, TodoProvider };