import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Home() {
  let yearOfBirth = 2004
  let myAge = new Date().getFullYear() - yearOfBirth
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row ">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl md:text-7xl font-bold text-white md:my-30">
            I'm a Full Stack developer
          </h2>
          <p className="text-gray-300 py-4 max-w-md">
            Hi, my name is Temur, I'm { myAge } years old, and I'm a full stack
            javascript developer, currently working on my own projects. I want
            to be a great senior developer in the future!
          </p>
          <button
            className="group w-fit px-6 py-3 my-2 flex items-center rounded-md text-white
          bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer
          "
          >
            Portfolio
            <span className="ml-2 group-hover:rotate-90 duration-300">
              <MdOutlineKeyboardArrowRight size={20} />
            </span>
          </button>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="tim"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}
