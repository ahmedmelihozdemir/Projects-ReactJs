import { useState } from "react";

function Todo({ todos, setTodos }) {
  const [addTodo, setAddTodo] = useState({ todoName: "", isCompleted: false });
  const onChangeAddTodo = (e) => {
    setAddTodo({ ...addTodo, [e.target.name]: e.target.value });
  };
  const addTodoList = () => {
    if (addTodo.todoName !== "") {
      setTodos([...todos, addTodo]);
      setAddTodo({ todoName: "", isCompleted: false });
    }
  };
  return (
    <div>
      <div>{addTodo.todoName} </div>
      <h1 className="text-3xl text-pink-700 font-bold m-4">Todo App</h1>
      <div className="flex">
        <input
          className="border border-gray-200 rounded py-2 px-4 mr-2 outline-none text-red-900"
          placeholder="Enter Todo"
          name="todoName"
          type="text"
          value={addTodo.todoName}
          onChange={onChangeAddTodo}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={addTodoList}
        >
          Add
        </button>
      </div>
    </div>
  );
}

export default Todo;
