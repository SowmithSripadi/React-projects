import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: "1",
      message: "Todo msg",
      completed: false,
    },
  ],
  addTodo: (todoItemMessage) => {},
  deleteTodo: (id) => {},
  editTodo: (id, updatedMSg) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(TodoContext);
};

export const TodoProvider = TodoContext.Provider;
