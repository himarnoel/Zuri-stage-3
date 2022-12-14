import React from "react";
import Nav from "./../components/Nav";
import { GiSettingsKnobs } from "react-icons/gi";
import Card from "./../components/Card";
import img1 from "../assets/stay/1.png";
import img2 from "../assets/stay/2.png";
import img3 from "../assets/stay/3.png";
import img4 from "../assets/stay/4.png";
import img5 from "../assets/stay/5.png";
import img6 from "../assets/stay/6.png";
import img7 from "../assets/stay/7.png";
import img8 from "../assets/stay/8.png";
import img10 from "../assets/stay/10.png";
import img11 from "../assets/stay/11.png";
import img12 from "../assets/stay/12.png";
import img13 from "../assets/stay/13.png";
import img14 from "../assets/stay/14.png";
import img15 from "../assets/stay/15.png";
import img16 from "../assets/stay/16.png";
import Footer from "./../components/Footer";
const Stay = () => {
  return (
    <div>
      <Nav />

      <div className=" hidden ">
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

        <div className="border-2 flex ">
          <a>Location</a>
          <GiSettingsKnobs />
        </div>
      </div>

      <div className="grid lg:grid-cols-4 md:grid-cols-2 mb-5 ">
        
        <Card img={img1} />
        <Card img={img2} />
        <Card img={img3} />
        <Card img={img4} />
        <Card img={img5} />
        <Card img={img6} />
        <Card img={img7} />
        <Card img={img8} />
        <Card img={img8} />
        <Card img={img10} />
        <Card img={img11} />
        <Card img={img12} />
        <Card img={img13} />
        <Card img={img14} />
        <Card img={img15} />
        <Card img={img16} />
      </div>
      <Footer />
    </div>
  );
};

export default Stay;
