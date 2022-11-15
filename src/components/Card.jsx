import React from "react";
import num1 from "../assets/cards/1.png";
const Card = () => {
  return (
    <div>
      <div className=" border-4 p-3 w-72 mb-20 mx-auto mt-10  rounded-xl">
        <img src={num1} alt="" className="object-contain " />
        <div className="flex justify-between">
          <p>Desert King</p>
          <p>1MBT per Night</p>
        </div>
        <div className="flex justify-between">
          <p>2345km away</p>
          <p>available for 2weeks stay</p>
        </div>
        <div className="text-left">
            
        </div>
      </div>
    </div>
  );
};

export default Card;
