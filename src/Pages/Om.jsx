import React from "react";
import Navbar from "../Components/Navbar";

const Om = () => {
  return (
    <div>
      <Navbar />
      <main>
        <h1>Om</h1>
        <p>
          I den här appen kan du lägga till dina Todo:s och markera dem när de
          är klara. Du kan även rensa listan. Kör hårt och get them things done!
        </p>
      </main>
    </div>
  );
};

export default Om;
