import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput("");
  };
  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12 text-center flex">
      <input
        type="text"
        className="bg-gray-300 flex-1 rounded text-base outline-none text-zinc-800 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-zinc-800 font-bold text-base bg-blue-500 border-0 py-1 px-3 focus:outline-none rounded leading-8"
      >
        Add Todo
      </button>
    </form>
  );
}

export default AddTodo;
