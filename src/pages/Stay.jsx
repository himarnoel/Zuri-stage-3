import React from "react";
import Nav from "./../components/Nav";
import { GiSettingsKnobs } from "react-icons/gi";
import Card from './../components/Card';
const Stay = () => {
  return (
    <div>
      <Nav />

      <div className="lg:flex  lg:justify-evenly ">
        <a href="" className="">
          Resuturant
        </a>
        <a href="" className="">
          Cottage
        </a>
        <a href="" className="">
          Fantast
        </a>
        <a href="" className="">
          Beach
        </a>
        <a href="" className="">
          Carbin
        </a>
        <a href="" className="">
          off-grid
        </a>
        <a href="" className="">
          Farm
        </a>

        <div className="border-2 flex">
          <a>Location</a>
          <GiSettingsKnobs />
        </div>

      </div>

      <div className="grid lg:grid-cols-4 md:grid-col-2 ">
        <Card />
      </div>
    </div>
  );
};

export default Stay;
