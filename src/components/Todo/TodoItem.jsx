import React from "react";
import { Check } from "../Check/Check";
import { BsTrash } from "react-icons/bs";

const TodoItem = ({ todo, changeTodo, removeTodo }) => {
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl p-5 w-full bg-gray-800">
      <button onClick={() => changeTodo(todo.id)} className="flex items-center">
        <Check isCompleted={todo.isCompleted} />
        <span className={`${todo.isCompleted ? "line-through" : ""}`}>
          {todo.title}
        </span>
      </button>
      <button onClick={() => removeTodo(todo.id)}>
        <BsTrash size={22} className="text-pink-900" />
      </button>
    </div>
  );
};

export { TodoItem };
