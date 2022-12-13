import React from "react";
import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

function User() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    axios(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((res) => {
        setUser(res.data);
      })
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <div className="flex justify-center items-center font-semibold text-lg">
      <div>
        <h1>User Detail</h1>
        <div>{loading && <div>Loading...</div>}</div>
        {!loading && (
          <div className="flex flex-col text-indigo-500">
            {JSON.stringify(user.name)}
          </div>
        )}
        <Link
          to={`/users/user/${parseInt(id) + 1}`}
          /* to={`users/${parseInt(id) + 1}`} */
          className="bg-orange-600 p-1 text-sm rounded-md hover:text-amber-400"
        >
          Next User {parseInt(id) + 1}
        </Link>
      </div>
    </div>
  );
}

export default User;
