import React, { FormEvent } from "react";
import { useFormTs } from "../hooks/useForm";


interface Todo {
  id: number;
  done: boolean;
  description: string;
}

interface TodoAddProps {
  onNewTodo: (newTodo: Todo) => void;
}

export const TodoAddTs: React.FC<TodoAddProps> = ({ onNewTodo }) => {
  const { description, onInputChange, onResetForm } = useFormTs({
    description: "",
  });

  const onFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (description.length <= 1) return;

    const newTodo: Todo = {
      id: new Date().getTime(),
      done: false,
      description: description,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <form onSubmit={onFormSubmit}>
      <input
        type="text"
        placeholder="ingresa una tarea"
        className="form-control"
        name="description"
        value={description}
        onChange={onInputChange}
      />
      <button type="submit" className="btn btn-primary mt-1">
        Agregar
      </button>
    </form>
  );
};
