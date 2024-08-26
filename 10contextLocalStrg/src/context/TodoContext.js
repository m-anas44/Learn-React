import { useContext, createContext } from "react";

const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Buy groceries",
      completed: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  completeToggle: (id) => {},
});

export const useTodo=()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
