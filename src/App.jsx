import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tape from "./components/Tape";
import Card from "./components/Card";

function App() {
  return (
    <div>
      <div className="lg:px-14 xl:px-28">
        <Nav />
        <Hero />
      </div>
      <Tape />
      <div className="text-center lg:text-xl xl:text-4xl text-xl">
        Inspiration for your next adventure
      </div>
      <Card />
    </div>
  );
}

export default App;
