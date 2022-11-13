import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";

function App() {
  return (
    <div className="lg:px-28">
      <Nav />
      <Hero />
    </div>
  );
}

export default App;
