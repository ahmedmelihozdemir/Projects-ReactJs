import React from "react";
import Todo from "./Todo";
import List from "./List";
import Footer from "./Footer";
import "./style.module.css";
import { useState } from "react";

function Todos() {
  const [todos, setTodos] = useState([
    { todoName: "Learn React.Js", isCompleted: false, id: 1 },
    { todoName: "Learn Next.Js", isCompleted: false, id: 2 },
    { todoName: "Learn Firebase", isCompleted: false, id: 3 },
  ]);

  return (
    <div className="grid grid-cols-1 m-14 text-xl">
      <Todo todos={todos} setTodos={setTodos} />
      <List todos={todos} setTodos={setTodos} />
      <Footer todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default Todos;
