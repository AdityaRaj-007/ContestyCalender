import React from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contests" element={<MainPage />} />
      </Routes>
      {/* <LandingPage /> */}
    </>
  );
};

export default App;
