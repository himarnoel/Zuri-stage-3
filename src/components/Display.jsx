import React from "react";
import Card from "./Card";
import num1 from "../assets/cards/1.png";
import num2 from "../assets/cards/2.png";
import num3 from "../assets/cards/3.png";
import num4 from "../assets/cards/4.png";
import num5 from "../assets/cards/5.png";
import num6 from "../assets/cards/6.png";
import num7 from "../assets/cards/7.png";
import num8 from "../assets/cards/8.png";

const Display = () => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 xl:px-16  ">
      <Card img={num1} />
      <Card img={num2} />
      <Card img={num3} />
      <Card img={num4} />
      <Card img={num5} />
      <Card img={num6} />
      <Card img={num7} />
      <Card img={num8} />
    </div>
  );
};

export default Display;
