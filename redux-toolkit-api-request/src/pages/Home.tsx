import React from "react";
import Header from "../components/layout/Header";
import CardComponent from "../Ts/CardComponent";

function Home() {
  return (
    <div className="flex flex-col">
      <Header />
      <CardComponent />
    </div>
  );
}

export default Home;
