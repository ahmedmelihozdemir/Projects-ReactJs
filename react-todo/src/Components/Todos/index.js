import React from "react";
import Todo from "./Todo";
import List from "./List";
import "./style.module.css";
import { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([
    { todoName: "Learn React.Js", isCompleted: false },
    { todoName: "Learn Next.Js", isCompleted: false },
    { todoName: "Learn Firebase", isCompleted: false },
  ]);

  return (
    <div className="m-4 text-3xl font-bold">
      <Todo todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todos;
