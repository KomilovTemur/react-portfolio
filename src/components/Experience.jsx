import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import javascript from "../assets/javascript.png";
import node from "../assets/node.png";
import reactJs from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import mongoDb from "../assets/mongodb.png"
import socketio from "../assets/socketio.png"
import expressjs from "../assets/expressjs.png"
import redis from "../assets/redis.png"
import linux from "../assets/linux.png"
import mysql from "../assets/mysql.png"
import php from "../assets/php.png"

const Experience = () => {
  const techs = [
    {
      src: html,
      title: "html",
      style: "shadow-orange-500",
    },
    {
      src: css,
      title: "css",
      style: "shadow-blue-500",
    },
    {
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      src: php,
      title: "PHP",
      style: "shadow-indigo-900",
    },
    {
      src: "https://laravel.com/img/logomark.min.svg",
      title: "Laravel",
      style: "shadow-red-500",
    },
    {
      src: mysql,
      title: "MySql || Maria DB",
      style: "shadow-orange-500",
    },
    {
      src: reactJs,
      title: "ReactJs",
      style: "shadow-blue-600",
    },
    {
      src: tailwind,
      title: "tailwindCss",
      style: "shadow-sky-400",
    },
    {
      src: github,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      src: node,
      title: "NodeJs",
      style: "shadow-green-500",
    },
    {
      src: mongoDb,
      title: "MongoDb",
      style: "shadow-white",
    },
    {
      src: socketio,
      title: "socketio",
      style: "shadow-white",
    },
    {
      src: expressjs,
      title: "ExpresJs",
      style: "shadow-white",
    },
    {
      src: redis,
      title: "Redis",
      style: "shadow-red-500",
    },
    {
      src: linux,
      title: "Linux",
      style: "shadow-blue-500",
    },
  ];
  return (
    <div
      name="experience"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
          <p className="py-6">These are the technologies I've worked on</p>
        </div>

        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-8 text-center py-8 px-12 sm:px=0">
          {techs.map(({ src, title, style }, index) => (
            <div
              key={index}
              className={`shadow-md ${style} hover:scale-105 duration-500 py-2 rounded-lg`}
            >
              <img alt="..." src={src} className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
