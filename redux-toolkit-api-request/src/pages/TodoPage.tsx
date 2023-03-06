import React from "react";
import { addTodo, removeTodo, completedTodo } from "../features/todoSlice";
import { useAppDispatch, useAppSelector } from "../store";

function TodoPage() {
  const dispatch = useAppDispatch();

  const todos = useAppSelector((state) => state.todos);
  const [title, setTitle] = React.useState<string>("");

  const handleAdd = () => {
    dispatch(addTodo(title));
    setTitle("");
  };
  const handleDelete = (id: string) => {
    dispatch(removeTodo(id));
  };
  const handleCompleted = (id: string) => {
    dispatch(completedTodo(id));
  };
  return (
    <div className="text-center">
      <h1 className="bg-blue-400 text-white inline-block rounded-md p-2">
        Todo Page
      </h1>
      <div>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.currentTarget.value)}
          className="bg-gray-200 border border-slate-800 rounded-md m-2 p-1"
        />
        <button
          onClick={handleAdd}
          className="bg-gray-400 rounded-md m-2 p-1 hover:bg-gray-500"
        >
          Add
        </button>
        <ul className="">
          {todos.map((todo) => (
            <li
              key={todo.id}
              className="grid grid-cols-7 items-center justify-end gap-4 p-2 bg-red-50"
            >
              <span className="grid grid-flow-col col-span-5 wrap word-wrap: break-word ">
                {todo.title}{" "}
              </span>
              <button
                onClick={() => handleCompleted(todo.id)}
                className="bg-gray-400 rounded-md p-1 w-fit justify-self-end"
                style={{
                  backgroundColor: todo.completed ? "green" : "red",
                }}
              >
                {todo.completed ? "Mark Not Completed" : "Mark Completed"}
              </button>
              <button
                onClick={() => handleDelete(todo.id)}
                className="bg-gray-400 rounded-md p-1 w-fit justify-self-end hover:bg-gray-500"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TodoPage;
