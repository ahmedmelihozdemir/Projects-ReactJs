import React from "react";
import { useAppSelector, useAppDispatch } from "../store";
import { fetchUser } from "../features/userSlice";
import Loading from "./Loading";

function UserList() {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.user);

  React.useEffect(() => {
    dispatch(fetchUser());
  }, []);
  return (
    <div className="">
      <h1 className="font-semibold text-xl">User List</h1>
      <div className="flex flex-col items-center justify-start bg-red-200">
        {user.loading && <Loading />}
        {user.error && <p>{user.error}</p>}
        {user.data?.results.map((user, idx) => {
          return (
            <div key={user.cell} className="grid grid-cols-2 gap-2 my-4">
              <div className="flex flex-col justify-start">
                <span>
                  {user.name.first} {user.name.last}
                </span>
                <span>
                  {user.location.street.number} {user.location.street.name}
                </span>
              </div>
              <img
                src={user.picture.medium}
                alt={user.name.first}
                title={user.name.first}
                className="rounded-md"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default UserList;
