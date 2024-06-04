import React, { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"
import { TodoAddTs } from "./TodoAdd"
import { TodoList } from "./TodoList"

const initialState = []

const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || []
}

export const TodoApp = () => {
  const [state, dispatch] = useReducer(todoReducer, initialState, init)
  const handleNewTodo = todo => {
    const action = {
      type: "[TODO] Add Todo",
      payload: todo,
    }
    dispatch(action)
  }

  const handleDelete = id => {
    dispatch({
      type: "[TODO] Remove Todo",
      payload: id,
    })
  }

  const onToggleTodo = id => {
    dispatch({
      type: "[TODO] Toggle Todo",
      payload: id,
    })
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(state))
  }, [state])

  return (
    <>
      <h1>
        TODO APP: 10, <small>pendientes: 2</small>
      </h1>
      <hr />
      <div className="row">
        <div className="col-6">
          <TodoList
            todos={state}
            onDeleteTodo={handleDelete}
            onToggleTodo={onToggleTodo}
          ></TodoList>
        </div>
        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <TodoAddTs onNewTodo={handleNewTodo}></TodoAddTs>
        </div>
      </div>
    </>
  )
}
