import React from "react";
import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

// Create a single supabase client for interacting with your database

const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [messageStatus, setMessageStatus] = useState("");
  const sendForm = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessageStatus("");
    try {
      const response = await supabase
        .from("messages")
        .insert({
          name: e.target.name.value,
          email: e.target.email.value,
          message: e.target.message.value,
        })
        .select();
      if (response.status == 201) {
        setMessageStatus("Thank you! Your message has been received!");
        e.target.name.value = "";
        e.target.email.value = "";
        e.target.message.value = "";
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
          <p className="py-6">Submit the form below to get touch in with me</p>
          {messageStatus != "" ? (
            <p className="py-6 text-green-300 font-semibold">{messageStatus}</p>
          ) : (
            <></>
          )}
        </div>
        <div className="flex justify-center items-center">
          <form
            action="https://getform.io/f/8f28ba7d-e2f2-48e5-a3b6-4917c3e15b3c"
            method="POST"
            onSubmit={sendForm}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="p-2 bg-transparent border-2 rounded-md my-4 text-white focus:outline-none"
            />
            <textarea
              type="text"
              name="message"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
              placeholder="Enter your message "
            ></textarea>
            <button
              className="text-white bg-gradient-to-b from-cyan-500
             to-blue-500 px-6 py-3 max-auto my-8 flex justify-center items-center rounded-md hover:scale-110 duration-300"
            >
              {!loading ? "Submit" : "Please wait..."}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
