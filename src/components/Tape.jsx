import React from "react";
import num1 from "../assets/Frame 4041.svg";
import num2 from "../assets/Group 59537.svg";
import num3 from "../assets/Group 4040.svg";
const Tape = () => {
  return (
    <div className="flex justify-around w-full bg-[#A02279] p-3 items-center lg:mb-10 mt-3 lg:mt-0">
      <img src={num1} alt="" className="object-contain w-24  lg:w-40" />
      <img src={num2} alt="" className="object-contain w-24 lg:w-40" />
      <img src={num3} alt="" className="object-contain w-24 lg:w-40" />
    </div>
  );
};

export default Tape;
