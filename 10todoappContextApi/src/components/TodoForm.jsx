import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoForm() {
  const [todoItemMessage, settodoItemMessage] = useState("");

  const { addTodo } = useTodo();

  const addMessage = (e) => {
    e.preventDefault();

    if (!todoItemMessage) return;
    console.log(todoItemMessage);
    addTodo(todoItemMessage);
    settodoItemMessage("");
  };

  return (
    <form onSubmit={addMessage} className="flex">
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
        value={todoItemMessage}
        onChange={(e) => settodoItemMessage(e.target.value)}
      />
      <button
        type="submit"
        className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
