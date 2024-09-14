import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const [editingTodoId, setEditingTodoId] = useState(null);
  const [updatedText, setUpdatedText] = useState("");

  const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: updatedText }));
    setEditingTodoId(null); // Exit edit mode after updating
  };

  return (
    <>
      <div className="text-xl font-bold mt-5 text-gray-100">Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-700 px-2 py-2 rounded"
            key={todo.id}
          >
            {editingTodoId === todo.id ? (
              <input
                type="text"
                className="text-black px-2 py-1 flex-1 rounded mr-2 focus:outline-none"
                value={updatedText}
                onChange={(e) => setUpdatedText(e.target.value)}
              />
            ) : (
              <div className="text-white">{todo.text}</div>
            )}

            {editingTodoId === todo.id ? (
              <button
                onClick={() => handleUpdate(todo.id)}
                className="text-white ml-auto mr-2 bg-green-500 border-0 py-1 px-4 focus:outline-none hover:bg-green-600 rounded text-md"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => {
                  setEditingTodoId(todo.id);
                  setUpdatedText(todo.text); // Pre-fill with current text
                }}
                className="text-white ml-auto mr-2 bg-zinc-500 border-0 py-1 px-4 focus:outline-none hover:bg-zinc-600 rounded text-md"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                  />
                </svg>
              </button>
            )}

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="text-white bg-red-500 border-0 py-1 px-4 focus:outline-none hover:bg-red-600 rounded text-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
