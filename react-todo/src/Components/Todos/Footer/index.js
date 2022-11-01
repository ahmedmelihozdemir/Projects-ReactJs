import React from "react";

function Footer({ todos, setTodos }) {
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false));
  };
  const completedTodos = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === true));
  };
  const activeTodos = () => {
    setTodos(todos.filter((todo) => todo.isCompleted === false));
  };
  const allTodos = () => {
    setTodos(
      todos.filter(
        (todo) => todo.isCompleted === false || todo.isCompleted === true
      )
    );
  };
  return (
    <div>
      <div className="flex justify-between items-center flex-nowrap bg-white mt-4">
        <div className="text-orange-900 text-sm mr-2">{todos.length} left</div>
        <div className="flex justify-between items-center">
          <button
            className="text-orange-900 hover:text-orange-500 text-sm mr-4"
            onClick={allTodos}
          >
            All
          </button>
          <button
            className="text-orange-900 hover:text-orange-500 text-sm mr-4"
            onClick={activeTodos}
          >
            Active
          </button>
          <button
            className="text-orange-900 hover:text-orange-500 text-sm"
            onClick={completedTodos}
          >
            Completed
          </button>
        </div>
        <button
          className="text-orange-900 hover:text-orange-500 text-sm"
          onClick={clearCompleted}
        >
          Clear Completed
        </button>
      </div>
    </div>
  );
}

export default Footer;
