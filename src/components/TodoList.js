import React from 'react'
import TodoCard from "./TodoCard"
import TodoNot from './TodoNot'
import classes from './components.module.css'

const TodoList = ({ todoList, editTodo, deleteTodo, completedOnChange, value }) => {
  return (
    <div className={classes.flexList}>
      {
       (todoList.length === 0) ? <TodoNot value={value}/> :
        todoList.map((todo, i) => 
        <TodoCard key={todo.date} todo={todo} editTodo={editTodo} deleteTodo={deleteTodo} completedOnChange={completedOnChange}/>
      )}
    </div>
  )
}

export default TodoList