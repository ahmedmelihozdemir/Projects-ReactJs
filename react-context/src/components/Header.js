import ThemeContext from "../context/ThemeContext";
import { useContext } from "react";

function Header() {
  const { theme, setTheme } = useContext(ThemeContext);
  return (
    <div>
      <div className="mb-8">
        <div>Header Theme: {theme} </div>
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-1 rounded mt-2" 
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default Header;
