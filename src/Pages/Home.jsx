import React from "react";
import Navbar from "../Components/Navbar";
import TodoComponent from "../Components/Todocomponent/TodoComponent";

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <TodoComponent />
      </main>
    </>
  );
};

export default Home;
