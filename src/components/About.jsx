import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>
        <p className="text-xl mt-20">
          My main occupation is web programming. My experience in this field is high. I have also participated in major projects and StartUPs in my field. I can create websites, Frontend, Backend and desktop version of sites. I have worked with many companies, teams and clients.
        </p>
        <br />
        <p className="text-xl">
{/*           <img width="90%" src="https://camo.githubusercontent.com/f2da35b97f4de6424bef1541e9e1ebbb7733eabfa8c71a8e6e3f7a54a3e5c13f/68747470733a2f2f6769746875622d726561646d652d61637469766974792d67726170682e76657263656c2e6170702f67726170683f757365726e616d653d4b6f6d696c6f7654656d7572267468656d653d72656163742d6461726b26686964655f626f726465723d7472756526617265613d74727565" data-canonical-src="https://github-readme-activity-graph.vercel.app/graph?username=KomilovTemur&amp;theme=react-dark&amp;hide_border=true&amp;area=true" style="max-width: 100%;"/> */}
        </p>
      </div>
    </div>
  );
};

export default About;
