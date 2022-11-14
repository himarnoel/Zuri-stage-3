import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tape from './components/Tape';

function App() {
  return (
    <div className="lg:px- xl:px-28">
      <Nav />
      <Hero />
      <Tape/>
    </div>
  );
}

export default App;
