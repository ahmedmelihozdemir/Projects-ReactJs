import { useState } from "react";

function List({ todos, setTodos }) {
  const checkTodo = (e) => {
    if (e.target.checked) {
      setTodos(
        todos.map((todo) => {
          if (todo.id === parseInt(e.target.id)) {
            return { ...todo, isCompleted: true };
          }
          return todo;
        })
      );
      console.log(e.target);
    } else {
      setTodos(
        todos.map((todo) => {
          if (todo.id === parseInt(e.target.id)) {
            return { ...todo, isCompleted: false };
          }
          return todo;
        })
      );
    }
  };
  const deleteTodo = (e) => {
    setTodos(todos.filter((todo) => todo.id !== parseInt(e.target.id)));
    console.log(e.target.id);
  };

  return (
    <div>
      <div className="">
        <ul className="list-none">
          {todos.map((todo) => (
            <li
              key={todo.todoName}
              className={"text-red-800 flex justify-between items-center "}
            >
              <input
                type="checkbox"
                value={todo.id}
                onChange={checkTodo}
                id={todo.id}
                className="mr-4"
              />
              <div
                className={
                  todo.isCompleted
                    ? "line-through text-red-800 flex justify-between items-center flex-wrap"
                    : "text-red-500 grid grid-cols-1  "
                }
              >
                {todo.todoName}
              </div>
              <button
                className="ml-4 material-symbols-outlined text-red-800 flex justify-end hover:cursor-pointer  hover:text-red-500 text-3xl hover:visible"
                id={todo.id}
                onClick={deleteTodo}
              >
                close
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default List;
