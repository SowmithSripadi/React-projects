import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./context/TodoContext";
import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoItemMessage) => {
    setTodos((prev) => [
      { id: Date.now(), message: todoItemMessage, completed: false },
      ...prev,
    ]);
  };

  const editTodo = (id, updatedMsg) => {
    // console.log("editTodo called with:", id, updatedMsg);
    setTodos((prev) =>
      prev.map((eachItem) =>
        eachItem.id === id ? { ...eachItem, message: updatedMsg } : eachItem
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((eachItem) => eachItem.id !== id));
  };

  const toggleComplete = (id) => {
    setTodos((prev) =>
      prev.map((eachItem) =>
        eachItem.id === id
          ? { ...eachItem, completed: !eachItem.completed }
          : eachItem
      )
    );
  };

  useEffect(() => {
    const storedtodos = JSON.parse(localStorage.getItem("todos"));

    if (storedtodos && storedtodos.length > 0) {
      setTodos(storedtodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <TodoProvider
      value={{ todos, addTodo, deleteTodo, editTodo, toggleComplete }}
    >
      <div className="bg-[#172842] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">
            Manage Your Todos
          </h1>
          <div className="mb-4">
            {/* Todo form goes here */} <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            {todos.map((todoItem) => (
              <div key={todoItem.id} className="w-full">
                <TodoItem todoItem={todoItem} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
