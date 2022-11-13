import React from "react";
import img1 from "../assets/image1.png";
import img2 from "../assets/image2.png";
import img3 from "../assets/image3.png";
import img4 from "../assets/image4.png";
const Hero = () => {
  return (
    <div>
      <div className="w-full grid lg:grid-cols-2  text-black mt-20  justify-between">
        <div className=" p-10">
          <p className="text-5xl mb-3">
            Rent a <a className="text-[#A02279]">Place</a> away from
            <br />
            <a className="text-[#A02279]">Home in the Metaverse</a>
          </p>
          <p className="pt-10 text-3xl ">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div class="input-group relative flex ">
            <input
              type="search"
              class="form-control  block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white  border border-solid border-gray-300 rounded "
              placeholder="Search"
              aria-label="Search"
            />
            <button
              class="btn inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
              type="button"
              id="button-addon2"
            ></button>
          </div>
        </div>
        <div className="flex flex-row items-center  ml-56">
          <div className="flex flex-col mr-5">
            <img src={img1} alt="" className="object-contain w-60 mb-3" />
            <img src={img2} alt="" className="object-contain w-60" />
          </div>
          <div className="flex flex-col mt-28">
            <img src={img3} alt="" className="object-contain w-60 mb-3" />
            <img src={img4} alt="" className="object-contain w-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
