import React from "react";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
const Hero = () => {
  return (
    <div>
      <div className="w-full grid lg:grid-cols-2  text-black mt-20  justify-between">
        <div className="p-10">
          <p className="text-5xl mb-3 text-center">
            Rent a <a className="text-[#A02279]">Place</a> away from
            <br />
            <a className="text-[#A02279]">Home in the Metaverse</a>
          </p>
          <p className="lg:pt-10 lg:text-3xl text-center text-2xl  ">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div class="flex mt-20 ">
          <input
              type="search"
              className=" rounded-l-lg lg:px-20 lg:py-2.5   py-1.2 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 "
              placeholder="Search for location"
              aria-label="Search"
            />
            <button
              className="btn lg:px-20 lg:py-2.5  px-1.5 py-2 rounded-r-lg bg-[#A02279] text-white font-medium text-xs  shadow-md "
              type="button"
            >
              Search
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center  lg:ml-56 mx-auto">
          <div className="flex flex-col mr-5 mt-28">
            <img
              src={img1}
              alt=""
              className="object-contain w-32 lg:w-60 mb-3"
            />
            <img src={img4} alt="" className="object-contain w-32 lg:w-60" />
          </div>
          <div className="flex flex-col ">
            <img
              src={img3}
              alt=""
              className="object-contain w-32 lg:w-60 mb-3"
            />
            <img src={img2} alt="" className="object-contain w-32 lg:w-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
