import { useState } from "react";

import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Tape from "./components/Tape";
import Card from "./components/Card";
import Display from "./components/Display";
import Nft from "./components/Nft";

function App() {
  return (
    <div>
        <Nav />
      <div className="lg:px-14 xl:px-28">
        <Hero />
      </div>
      <Tape />
      <div className="text-center lg:text-xl xl:text-4xl text-xl mt-3">
        Inspiration for your next adventure
      </div>
      <Display />
      <Nft />
    </div>
  );
}

export default App;
