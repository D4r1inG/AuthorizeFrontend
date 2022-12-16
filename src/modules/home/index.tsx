import React from "react";
import NavBar from "./NavBar";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col h-screen">
      <NavBar />
      <div className="h-full flex justify-center items-center font-bold">
        Home
      </div>
    </div>
  );
};

export default Home;
