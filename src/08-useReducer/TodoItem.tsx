import React from 'react'

interface Todo {
    id: number;
    done: boolean;
    description: string;
}

interface Prop {
    todo: Todo,
    onDeleteTodo: (id: number) => void,
    onToggleTodo: (id: number) => void,
}

export const TodoItem: React.FC<Prop> = ({ todo, onDeleteTodo, onToggleTodo }) => {
    return (
        <li className="list-group-item d-flex justify-content-between" onClick={() => onToggleTodo(todo.id)} >
            <span className={`align-self-center ${todo.done && 'text-decoration-line-through'}`}>{todo.description}</span>
            <button className="btn btn-danger" onClick={() => onDeleteTodo(todo.id)}>Borrar</button>
        </li>
    )
}
