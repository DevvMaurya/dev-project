import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import { BrowserRouter, Route, Routes ,Router } from "react-router-dom";
import "./App.css";
import { Components } from "react";
import Section1 from "./Components/section1";
import Section2 from "./Components/section2";
import Footer from "./Components/footer";
// import Login from "./Components/login";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Section1 />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Section2 />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Footer />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
