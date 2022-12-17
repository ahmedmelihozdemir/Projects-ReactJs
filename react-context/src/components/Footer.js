import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

function Button() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div className="">
      <div>Active Theme: {theme} </div>
    </div>
  );
}

export default Button;
