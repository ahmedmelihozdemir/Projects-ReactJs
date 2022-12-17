import { createContext, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "John Doe" });
  const values = {
    user,
    setUser,
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContext;
