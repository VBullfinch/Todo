import React, { useState } from "react";

const CreateTodoField = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const addTodo = (title) => {
    setTodos((prev) => [
      {
        id: new Date(),
        title,
        isCompleted: false,
      },
      ...prev,
    ]);
    setTitle("");
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTodo(title);
    }
  };
  return (
    <div className="flex items-center justify-between mb-4 rounded-2xl p-5 w-full border-zinc-800 border-2 px-5 py-3 w-full">
      <input
        className="bg-transparent w-full border-none outline-none"
        type="text"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        onKeyDown={handleKeyDown}
        placeholder="Add a task"
      />
    </div>
  );
};
export { CreateTodoField };
