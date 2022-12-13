import React from "react";
import { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="flex justify-center items-center font-semibold text-lg">
      <div className="flex flex-col justify-center items-center">
        <Link to={"member"} className="hover:text-red-500 bg-slate-700 rounded-md p-1 text-sm" >Go To Member</Link>
        <Outlet />
        <h1>Users</h1>
        {loading && <div>Loading...</div>}
        <ul className="flex flex-col justify-center items-start">
          {users.map((user) => {
            return (
              <li key={user.id}>
                {" "}
                <Link to={`user/${user.id}`}>{user.name}</Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Users;
