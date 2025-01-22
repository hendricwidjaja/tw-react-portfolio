import React from "react";
import { CONTACT } from "../constants";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="border-b text-white border-neutral-900 pb-10 pt-1 bg-black">
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="font-lacquer my-10 text-white text-center text-4xl"
      >
        <a href="/#home" className="font-lacquer cursor-pointer text-5xl">
          :)
        </a>
      </motion.div>
      <div className="text-center text-white tracking-tighter">
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          {CONTACT.address}
        </motion.p>
        <motion.p
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          {CONTACT.phoneNo}
        </motion.p>
        <motion.div
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: -100 }}
          transition={{ duration: 1 }}
          className="mb-4"
        >
          <a href="mailto:hcwidjaja@gmail.com">{CONTACT.email}</a>
        </motion.div>
        <motion.h2
          whileInView={{ opacity: 1, x: 0 }}
          initial={{ opacity: 0, x: 100 }}
          transition={{ duration: 1 }}
          className="text-white"
        >
          &copy; Hendric Widjaja | All Rights Reserved
        </motion.h2>
      </div>
    </div>
  );
};

export default Footer;
