import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import TodoPage from "../../pages/TodoPage";
import UserList from "../UserList";
import Home from "../../pages/Home";

function Header() {
  return (
    <div className="bg-blue-500 flex flex-col ">
      <nav className="flex justify-between gap-2 text-xl font-semibold ">
        <NavLink
          to="/"
          className="text-yellow-200 p-2 m-2 rounded-md hover:text-blue-700 shadow-lg"
        >
          Home
        </NavLink>
        <NavLink
          to="/todo"
          className="text-yellow-200 p-2 m-2 rounded-md hover:text-blue-700 shadow-lg"
        >
          Todo
        </NavLink>
        <NavLink
          to="/user"
          className="text-yellow-200 p-2 m-2 rounded-md hover:text-blue-700 shadow-lg"
        >
          Users
        </NavLink>
      </nav>
      <Routes>
        <Route path="/todo" element={<TodoPage />} />
        <Route path="/user" element={<UserList />} />
        {/* <Route path="/" element={<Home />} /> */}
      </Routes>
    </div>
  );
}

export default Header;
