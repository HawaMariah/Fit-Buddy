import { Route, Routes } from "react-router-dom";
import React from "react";
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Homepage from "./Homepage";
import Login from "./Login";
import Signup from "./Signup";
import "./App.css";
import SelectFitType from "./SelectFitType";
import Hero from "./Hero";
import Footer from "./Footer";
import Articles from "./Articles";

function App() {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<Signup />} />
        <Route exact path="/fittype" element={<SelectFitType />} />
        <Route exact path="/hero" element={<Hero />} />
        <Route exact path="/articles" element={<Articles />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
