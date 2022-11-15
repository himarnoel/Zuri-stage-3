import React from "react";
import num1 from "../assets/cards/1.png";
const Card = () => {
  return (
    <div>
      <div className=" border-2 p-3 lg:w-[21rem] w-[18rem] mb-20 mx-auto mt-10  rounded-xl">
        <img src={num1} alt="" className="object-contain " />
        <div className="mt-2">
          <div className="flex justify-between text-black mt-2">
            <p>Desert King</p>
            <p >1MBT per Night</p>
          </div>
          <div className="flex justify-between lg:text-sm text-xs mt-2" >
            <p>2345km away</p>
            <p>available for 2weeks stay</p>
          </div>
          <div className="flex mt-2">
            <span className="text-left text-[#A02279]">&#9733;</span>
            <span className="text-left text-[#A02279]">&#9733;</span>
            <span className="text-left text-[#A02279]">&#9733;</span>
            <span className="text-left text-[#A02279]">&#9733;</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
