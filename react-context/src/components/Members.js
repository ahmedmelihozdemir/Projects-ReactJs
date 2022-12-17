import { useContext } from "react";
import UserContext from "../context/UserContext";

function Members() {
  const user = useContext(UserContext);
  console.log(user);
  
  return (
    <div>
      <h1 className="text-green-700 font-semibold m-2">Members</h1>
      <div>
        <ul>
          <li>Member 1</li>
          <li>Member 2</li>
          <li>Member 3</li>
        </ul>
      </div>
    </div>
  );
}

export default Members;
