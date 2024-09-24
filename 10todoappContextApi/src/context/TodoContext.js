import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: "1",
      message: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todoItem) => {},
  deleteTodo: (id) => {},
  editTodo: (id, todoItem) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
