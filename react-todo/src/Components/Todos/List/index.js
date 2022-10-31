import { useState } from "react";

function List({ todos, setTodos }) {
  const checkTodo = (e) => {
    if (e.target.checked) {
      
      console.log("✅ Checkbox is checked");
    } else {
    }
  };
  const deleteTodo = (e) => {
    setTodos(todos.filter((todo) => todo.id !== e.target.id));
    
  };
  return (
    <div>
      <h1 className="text-3xl font-bold">List</h1>
      <div className="text-base flex flex-row justify-start items-center m-2 p-2">
        <input type="checkbox" name="" id="" />
        <span className="m-2">Select All</span>
      </div>
      <div className="">
        <ul className="">
          {todos.map((todo) => (
            <li
              key={todo.todoName}
              className="text-red-900 flex justify-between items-center flex-wrap"
            >
              <input
                type="checkbox"
                className="m-4"
                name={todo.todoName}
                value={todo.isCompleted}
                onChange={checkTodo}
              />
              <div>{todo.todoName} </div>
              <button
                className="material-symbols-outlined text-red-800 flex justify-end hover:cursor-pointer hover:text-red-500 hover:visible"
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
