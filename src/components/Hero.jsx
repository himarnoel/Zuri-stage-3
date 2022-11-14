import React from "react";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
const Hero = () => {
  return (
    <div>
      <div className="w-full grid lg:grid-cols-2   text-black lg:mt-20  mt-10 justify-between 2xl:gap-y-10">
        <div className="p-10">
          <p className="text-5xl mb-3 text-center lg:text-left">
            Rent a <a className="text-[#A02279]">Place</a> away from
            <br />
            <a className="text-[#A02279]">Home in the Metaverse</a>
          </p>
          <p className="lg:pt-10 lg:text-3xl text-center text-2xl lg:text-left ">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="flex lg:mt-20  mt-16 ">
            <input
              type="text"
              placeholder="Search for location"
              aria-label="Search"
              type="search"
              className=" lg:w-[50%] lg:py-3 px-1.5 w-48 bg-white rounded-l-lg border border-solid text-sm lg:text-lg border-gray-300 "
            />
            <button className="lg:w-[30%]  w-20 rounded-r-lg text-white  bg-[#A02279]   ">
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center  lg:mb-64 lg:p-2 xl:p-0 mx-auto 2xl:ml-40 ">
          <div className="flex flex-col mr-5 mt-28">
            <img
              src={img1}
              alt=""
              className="object-contain w-36 lg:w-60 mb-3 2xl:w-80 "
            />
            <img src={img4} alt="" className="object-contain w-36 lg:w-60 2xl:w-80  " />
          </div>
          <div className="flex flex-col ">
            <img
              src={img3}
              alt=""
              className="object-contain w-36 lg:w-60 mb-3 2xl:w-80 "
            />
            <img src={img2} alt="" className="object-contain w-36 lg:w-80 2xl:w-80 " />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
