import React from "react";
import logo from "../assets/Vector.png";
import name from "../assets/name.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  return (
    <div>
      <div className="hidden lg:block lg:fixed lg:top-0  bg-white w-full pr-48">
        <div
          className=" 
     mx-auto  p-5 flex justify-between items-center w-full "
        >
          <div className="flex">
            <img src={logo} alt="" className="object-contain mr-3" />
            <img src={name} alt="" className="object-contain" />
          </div>
          <div className="flex text-xl   w-1/2 justify-evenly items-center ">
            <a className="" href="/">
              Home
            </a>
            <a className="" href="/">
              Place to Stay
            </a>
            <a className="" href="/">
              NFTS
            </a>
            <a className="" href="/">
              Community
            </a>
            <a></a>
          </div>
          <button className="p-3 bg-[#A02279] rounded-md text-white">
            Connect Wallet
          </button>
        </div>
      </div>
      <div className="lg:hidden fixed top-0 bg-white">
        <div className=" w-screen p-3">
          <div className="flex  items-center justify-between">
            <div className="flex items-center">
              <img src={logo} alt="" className="object-contain mr-1" />
              <img src={name} alt="" className="object-contain w-20" />
            </div>
            <img src="" alt="" />
            <AiOutlineMenu size={22} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
