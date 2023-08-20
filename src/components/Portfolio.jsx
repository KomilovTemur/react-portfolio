import React from "react";
import myBaseCamp from "../assets/portfolio/mybaseCamp.png";
import calculatorApp from "../assets/portfolio/calculator.png";
import firebaseAuth from "../assets/portfolio/firebaseAuth.png";
import yelpApp from "../assets/portfolio/yelpApp.png";
import pokeDex from "../assets/portfolio/pokedex.png";
import restaurant from "../assets/portfolio/restaurant.png";
import basicapi from "../assets/portfolio/basicapi.png";
import bookLibaryApi from "../assets/portfolio/bookLibaryApi.png";
import kardiodev from "../assets/portfolio/cardiocenter.uz.png";
import gym_ecommerce from "../assets/portfolio/gym-ecommerce.png";

const Portfolio = () => {
  const portfolios = [
    // https://i.ibb.co/k8zhD2X/Screenshot-from-2023-08-20-10-52-34.png
    {
      src: "https://i.ibb.co/k8zhD2X/Screenshot-from-2023-08-20-10-52-34.png",
      projectName: "neoinsurance.uz (continues)",
      demo: "https://neoinsurance.uz/",
      code: "",
      codeType: "private"
    },
    {
      src: "https://i.ibb.co/LkbnhRC/image.png",
      projectName: "chayxanshik.uz",
      demo: "https://chayxanshik.uz/",
      code: "",
      codeType: "private"
    },
    {
      src: "https://i.ibb.co/c3mjNGP/image.png",
      projectName: "Rokki.uz",
      demo: "https://rokki.uz/",
      code: "",
      codeType: "private"
    },
    {
      src: kardiodev,
      projectName: "cardiocenter.uz",
      demo: "https://www.cardiocenter.uz/",
      code: "",
      codeType: "private"
    },
    {
      src: gym_ecommerce,
      projectName: "GYM E-commerce",
      demo: "http://gym-ecommerce.na4u.ru/",
      code: "https://github.com/KomilovTemur/ecommerce-gym",
      codeType: "open-source"
    },
    {
      src: "https://i.ibb.co/GVZB2QM/Screenshot-54.png",
      projectName: "E-commerce",
      demo: "http://e-commerce.na4u.ru/products?page=1",
      code: "https://github.com/KomilovTemur/ecomerce-laravel",
      codeType: "open-source"
    },
    {
      src: "https://i.ibb.co/JdMyXjx/image.png",
      projectName: "Todo App",
      demo: "https://typescript-react-todo-app.vercel.app/",
      code: "https://github.com/KomilovTemur/typescript-react-todoApp",
      codeType: "open-source"
    },
    {
      src: myBaseCamp,
      projectName: "Nodejs project",
      demo: "https://base-camp-qwasar-temur-komilov.herokuapp.com/",
      code: "https://github.com/KomilovTemur/myBaseCamp-qwasar.io.git",
      codeType: "open-source"
    },
    {
      src: calculatorApp,
      projectName: "calculator App",
      demo: "https://calculator-react-qwasar.netlify.app/",
      code: "https://github.com/KomilovTemur/reactJsCalculator",
      codeType: "open-source"
    },
    {
      src: firebaseAuth,
      projectName: "firebase Auth",
      demo: "https://tim-coder-firebase-auth.netlify.app/",
      code: "https://github.com/KomilovTemur/firebaseAuth",
      codeType: "open-source"
    },
    {
      src: yelpApp,
      projectName: "Yelp App",
      demo: "https://yelp-app-komilov-t.netlify.app/",
      code: "https://github.com/KomilovTemur/yelp",
      codeType: "open-source"
    },
    {
      src: pokeDex,
      projectName: "pokemon dashboard",
      demo: "https://pokedex-app-v2.netlify.app/",
      code: "https://github.com/KomilovTemur/pokeDex",
      codeType: "open-source"
    },
    {
      src: restaurant,
      projectName: "Restaurant Italy",
      demo: "https://restaurantitaly.netlify.app/",
      code: "https://github.com/KomilovTemur/restaurant",
      codeType: "open-source"
    },
    {
      src: "https://i.ibb.co/ydyBpjz/Screenshot-2022-11-22-182424.png",
      projectName: "Reusable components",
      demo: "https://reusable-components-react-js.netlify.app/",
      code: "https://github.com/KomilovTemur/reusable-components-react",
      codeType: "open-source"
    },
    {
      src: basicapi,
      projectName: "Basic REST Api",
      // demo: "https://reusable-components-react-js.netlify.app/",
      code: "https://github.com/KomilovTemur/basic-rest-api",
      codeType: "open-source"
    },
    {
      src: bookLibaryApi,
      projectName: "Books Libary Api",
      demo: "https://documenter.getpostman.com/view/25011836/2s8Z6u3ZeZ",
      code: "https://github.com/KomilovTemur/my-api-MERN",
      codeType: "open-source"
    }
  ];
  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 ">Check out some of my work right here</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ src, demo, code, projectName, codeType }, index) => (
            <div key={index} className="shadow-md shadow-gray-800 rounded-lg">
              <p className="text-xl text-center">{projectName}</p>
              <img
                src={src}
                alt="..."
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a
                  target="_blank"
                  href={demo}
                  rel="noreferrer"
                  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-bold"
                >
                  Demo
                </a>
                {code === "" ?
                  <a
                    aria-disabled="true"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-bold text-gray-500 cursor-default"
                  >,
                    Code
                  </a>
                  :
                  <a
                    target="_blank"
                    href={code}
                    rel="noreferrer"
                    className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 text-bold"
                  >
                    Code
                  </a>
                }

              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
