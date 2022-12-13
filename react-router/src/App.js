import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import User from "./components/User";
import Users from "./components/Users";
import Member from "./components/Member";
import NoPage from "./components/NoPage";
import "./App.css";

function App() {
  return (
    <div className="flex justify-center items-center mt-4">
      <div>
        <nav className="flex justify-center items-center bg-red-500 rounded-md mb-2">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="users">Users</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="users" element={<Users />}>
            <Route path="member" element={<Member />} />
            <Route path="user/:id" element={<User />} />
          </Route>
          <Route path="user/:id" element={<User />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
