import React, { useState } from "react";
import { useTodo } from "../context/TodoContext";

function TodoItem({ todoItem }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todoItem.message || ""); // default empty string

  const { editTodo, deleteTodo, toggleComplete } = useTodo();

  const updatefunction = () => {
    // console.log("Saving todo:", todoMsg);
    editTodo(todoItem.id, todoMsg); // Ensure todoMsg is the updated message
    setIsTodoEditable(false); // Ensure to set editable state to false after saving
  };

  const toggleCompleted = () => {
    toggleComplete(todoItem.id);
  };

  return (
    <div
      className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
        todoItem.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer"
        checked={todoItem.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`border outline-none w-full bg-transparent rounded-lg ${
          isTodoEditable ? "border-black/10 px-2" : "border-transparent"
        } ${todoItem.completed ? "line-through" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />
      {/* Edit, Save Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todoItem.completed) return;

          if (isTodoEditable) {
            updatefunction();
          } else setIsTodoEditable((prev) => !prev);

          // console.log(isTodoEditable);
        }}
        disabled={todoItem.completed}
      >
        {isTodoEditable ? "📁" : "✏️"}
      </button>
      {/* Delete Todo Button */}
      <button
        className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
        onClick={() => deleteTodo(todoItem.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;
