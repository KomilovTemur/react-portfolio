import React from "react";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      href: "home",
    },
    {
      id: 2,
      href: "about",
    },
    {
      id: 3,
      href: "portfolio",
    },
    {
      id: 4,
      href: "experience",
    },
    {
      id: 5,
      href: "contact",
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 bg-black text-white fixed px-4">
      <div>
        <h1 className="font-signature text-5xl ml-2">Tim</h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, href }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"
          >
            <Link onClick={() => setNav(false)} to={href} smooth duration={500}>
              {href}
            </Link>
          </li>
        ))}
      </ul>
      <button
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-gray-300 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </button>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
          {links.map(({ id, href }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              {href}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
