import React from "react";
import { motion } from "framer-motion";
import handshake from "../assets/heading-icons/work-together-icon.svg";

const Contact = () => {
  return (
    <div id="contact" className="mt-10 flex flex-col items-center px-12 pb-4">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="flex flex-wrap gap-4 justify-center items-center"
      >
        <div className="flex flex-wrap gap-3 justify-center">
          <h1 className="font-lacquer text-4xl">let's</h1>
          <h1 className="font-lacquer text-4xl">work</h1>
          <h1 className="font-lacquer text-4xl">together</h1>
        </div>
        <img className="size-20" src={handshake} alt="handshake-icon"></img>
      </motion.div>

      {/* Name Input */}
      <div className="flex flex-col mb-6 w-[80dvw] max-w-xl">
        <label className="p-2" htmlFor="name">
          Name:
        </label>
        <input
          type="text"
          className="w-full border-2 border-black bg-gray-100 rounded-md p-1"
          placeholder="What's your name?"
          autoComplete="on"
        ></input>
      </div>

      {/* Email Input */}
      <div className="flex flex-col mb-6 w-[80dvw] max-w-xl">
        <label className="p-2" htmlFor="email">
          Email:
        </label>
        <input
          type="text"
          className="w-full border-2 border-black bg-gray-100 rounded-md p-1"
          placeholder="What's your email?"
          autoComplete="on"
        ></input>
      </div>

      {/* Message Input */}
      <div className="flex flex-col mb-6 w-[80dvw] max-w-xl">
        <label className="p-2" htmlFor="message">
          Message:
        </label>
        <textarea
          rows="7"
          className="w-full border-2 border-black bg-gray-100 rounded-md p-1"
          placeholder="Say Hi :)"
          autoComplete="on"
        ></textarea>
      </div>

      {/* Submit Button */}
      <div className="flex flex-col mb-4">
        <button className="bg-black text-white rounded-2xl w-[80dvw] max-w-80 h-10">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
