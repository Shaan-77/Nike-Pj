import React, { useState } from "react";
import { headerLogo } from "../assets/images";
import { arrowRight, hamburger } from "../assets/icons";
import { navLinks } from "../Constants";

const Nav = () => {
  const [Isopen, Setisopen] = useState();
  return (
    <>
      <header className="padding-x py-5 absolute z-10 w-full max-sm:fixed">
        <nav className="flex justify-between items-center max-container ">
          <a href="/">
            <img src={headerLogo} alt="Logo" width={130} height={29} />
          </a>
          <ul
            className={` ${
              Isopen
                ? "flex absolute w-screen -ml-9 top-12 flex-col py-10 items-center z-[20000] h-screen  bg-white-400 hover:text-red-800 "
                : "max-sm:hidden max-md:hidden"
            } 'flex-1 flex justify-center items-center gap-16  '`}
          >
            {navLinks.map((links) => (
              <li key={links.label}>
                <a
                  href={links.href}
                  className="font-montserrat leading-normal text-[15px] text-orange-700 hover:text-red-900  active:text-red-950 hover:underline transition ease-in-out duration-300"
                >
                  {links.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/"
            className=" flex mr-5 max-lg:hidden px-6 py-3 justify-center bg-coral-red rounded-full text-white hover:bg-red-600 transition ease-out duration-100  
            "
          >
            Sign in/Explore now
            <img
              src={arrowRight}
              alt=""
              className=" mt-1 ml-2  text-red-500 rounded-full w-5 h-5"
            />
          </a>
          <button className="hidden max-lg:block">
            <img
              src={hamburger}
              alt="hamburger"
              width={25}
              height={25}
              onClick={() => Setisopen(!Isopen)}
            />
          </button>
        </nav>
      </header>
    </>
  );
};

export default Nav;
