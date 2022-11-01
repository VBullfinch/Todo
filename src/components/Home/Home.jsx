import React, { useState } from "react";
import { TodoItem } from "../Todo/TodoItem";
import { CreateTodoField } from "../Todo/CreateTodoField";

const data = [
  {
    id: 456879,
    title: "wash",
    isCompleted: false,
  },
  {
    id: 789654,
    title: "read",
    isCompleted: false,
  },
  {
    id: 45687,
    title: "clean",
    isCompleted: false,
  },
];
const Home = () => {
  const [todos, setTodos] = useState(data);

  const changeTodo = (id) => {
    const copy = [...todos];
    const current = copy.find((t) => t.id === id);
    current.isCompleted = !current.isCompleted;
    setTodos(copy);
  };
  const removeTodo = (id) => {
    setTodos([...todos].filter((t) => t.id !== id));
  };

  return (
    <div className=" text-white w4/5 mx-auto">
      <h1 className="text-2xl font-bold text-center p-8">Todo List</h1>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          removeTodo={removeTodo}
          changeTodo={changeTodo}
        />
      ))}
      <CreateTodoField setTodos={setTodos} />
    </div>
  );
};
export { Home };
