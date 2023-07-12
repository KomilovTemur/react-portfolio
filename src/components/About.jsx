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
        {/* <p className="text-xl">
        </p> */}
      </div >
    </div >
  );
};

export default About;
