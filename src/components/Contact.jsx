import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white overflow-hidden"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen">
        <div className="p b-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-400">
            Contact
          </p>
          <p className="py-6">Submit the form bellow to get touch in with me</p>
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/8f28ba7d-e2f2-48e5-a3b6-4917c3e15b3c"
            method="POST"
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md my-4 text-white focus:outline-none"
            />
            <textarea
              type="text"
              name="massage"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Enter your massage "
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500
             to-blue-500 px-6 py-3 max-auto my-8 flex justify-center items-center rounded-md hover:scale-110 duration-300"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
