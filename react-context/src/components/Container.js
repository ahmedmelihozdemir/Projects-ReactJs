import React from "react";
import { ThemeProvider } from "../context/ThemeContext";
import { UserProvider } from "../context/UserContext";

import Header from "../components/Header";
import Footer from "./Footer";
import Members from "./Members";

function Container() {
  return (
    <div>
      <div className="bg-red-300">
        <ThemeProvider>
          <UserProvider>
            <Header />
            <hr />
            <Footer />
          </UserProvider>
        </ThemeProvider>

        <UserProvider>
          <Members />
        </UserProvider>
      </div>
    </div>
  );
}

export default Container;
