import React, { useState } from "react";
import "./App.css";
import LoveCalculator from "./pages/LoveCalculator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GymAdmissionForm } from "./pages/GymForm";
import Navigation from "./pages/Navigation";
import Footer from "./pages/Footer";
import Dummypage from "./pages/DummyPage";

const App = () => {
  return (
    <>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<GymAdmissionForm />} />
          <Route path="/love-calculator" element={<LoveCalculator />} />
          <Route path="/dummypage" element={<Dummypage />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
