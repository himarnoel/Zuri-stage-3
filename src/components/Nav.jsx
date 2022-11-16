import React from "react";
import logo from "../assets/Vector.png";
import name from "../assets/name.png";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  const [change, setchange] = React.useState(false);
  return (
    <div>
      <div className="hidden lg:block  w-full px-[7rem] bg-white mx-auto">
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
            <Link className="" to="/stay">
              Place to Stay
            </Link>
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
            <div className="dfa" onClick={() => setchange(!change)}>
              <AiOutlineMenu size={22} />
            </div>
          </div>
        </div>
        {change ? (
          <div className="fixed bg-white h-[12rem] w-full flex flex-col items-center justify-evenly">
            <Link to="/stay">Home</Link>
            <Link to="/stay">Place to Stay</Link>
            <Link to="/">NFTS</Link>
            <Link to="/">Community</Link>
            <button className="p-3 bg-[#A02279] rounded-md text-white">
              Connect Wallet
            </button>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Nav;
