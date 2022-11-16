import React from "react";
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
const Card = (props) => {
  return (
    <div>
      <div className=" border-2 p-3 lg:w-[19rem] w-[18rem]  mx-auto mt-10  rounded-xl">
        <img src={props.img} alt="" className="object-contain mx-auto " />
        <div className="mt-2">
          <div className="flex justify-between text-black mt-2">
            <p>Desert King</p>
            <p>1MBT per Night</p>
          </div>
          <div className="flex justify-between lg:text-xs text-xs mt-2">
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
