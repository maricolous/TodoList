import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import Om from "./Pages/om";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./Pages/NotFound";
import "animate.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pages/Om" element={<Om />} />
            <Route path="*" element={<NotFound />} /> {/* 404 Route */}
          </Routes>
        </>
      </BrowserRouter>
    </>
  );
};

export default App;
