import React, { useState } from "react"
import Todo from "./Todo"
import NewTodoForm from "./NewTodoForm"

function ToDoList() {
    const [todos, setTodos] = useState([])

    const add = newTodo => {
        setTodos(todos => [...todos, newTodo])
    }
    const remove = id => {
        setTodos(todos => todos.filter(todo => todo.id !== id))
    }

    const todoComponents = todos.map(todo => (
        <Todo 
            key={todo.id}
            id={todo.id}
            task={todo.task}
            handlRemove={remove}
        />
    ))

    return(
        <div>
            <NewTodoForm addTodo={add}/>
            {todoComponents}
        </div>
    )

}


export default ToDoList