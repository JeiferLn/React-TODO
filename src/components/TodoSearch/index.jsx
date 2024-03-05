import React from 'react'
import searchIcon from "../../assets/search-icon.svg";
import './style.css'
import { TodoContext } from '../../Context/TodoContext';

function TodoSearch () { 
    const {searchValue, setSearchValue} = React.useContext(TodoContext);
    return (
        <div className='todo-search'>
            <input className="todo-input" placeholder="Cortar Cebolla" value={searchValue} 
            onChange={(event) => {
                setSearchValue(event.target.value)
            }}></input>
            <img className='search-icon' src={searchIcon} alt='search-icon'></img>
        </div>
    )
}

export {TodoSearch}