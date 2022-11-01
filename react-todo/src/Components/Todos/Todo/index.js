import { useState } from "react";

function Todo({ todos, setTodos }) {
  const maxId = todos.length;
  const [addTodo, setAddTodo] = useState({
    todoName: "",
    isCompleted: false,
    id: maxId + 1,
  });
  const onChangeAddTodo = (e) => {
    setAddTodo({
      ...addTodo,
      [e.target.name]: e.target.value,
      isCompleted: false,
      id: maxId + 1,
    });
  };
  const addTodoList = () => {
    if (
      addTodo.todoName !== "" &&
      addTodo.todoName !== todos.todoName &&
      addTodo.todoName !== " " &&
      addTodo.todoName !== todos.map((todo) => todo.todoName)
    ) {
      setTodos([...todos, addTodo]);
      setAddTodo({ todoName: "", isCompleted: false, id: maxId + 1 });
    }
  };
  const selectAll = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.isCompleted === false) return { ...todo, isCompleted: true };
        else return { ...todo, isCompleted: false };
      })
    );
  };
  return (
    <div className="mb-4">
      <div className="flex items-center bg-white">
        <span
          onClick={selectAll}
          className="material-symbols-outlined hover:cursor-pointer flex justify-start mr-2 text-blue-800 text-3xl"
        >
          expand_more
        </span>
        <input
          className="outline-none text-red-900 flex justify-center items-center w-full"
          placeholder="Enter Todo"
          onChange={onChangeAddTodo}
          value={addTodo.todoName}
          name="todoName"
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold flex justify-end ml-auto p-2"
          onClick={addTodoList}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Todo;
