import { useState } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Stay from './pages/Stay';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stay" element={<Stay />} />
      </Routes>
    </div>
  );
}

export default App;
