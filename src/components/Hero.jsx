import React from "react";
import { HERO_CONTENT } from "../constants";
import profile from "../assets/profile-picture2.jpg";
import cv from "../assets/Hendric_Widjaja_CV.pdf";
import { motion } from "framer-motion";

import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";

const container = (delay) => ({
  bounce: {
    y: [0, -25, 0],
    transition: { duration: 0.7, ease: "easeInOut", delay: delay },
  },
});

const Hero = () => {
  return (
    <div id="home" className="sm:pt-56 pt-40 flex flex-col items-center pb-4 border-b border-slate-200">
      <div className="flex justify-center">
        <motion.img
          variants={container(0.4)}
          animate="bounce"
          className="sm:rounded-full sm:border-[5px] ease-in-out border-black sm:size-52 size-0"
          src={profile}
          alt="Hendric Widjaja Profile Pic"
        />
      </div>
      <div className="justify-center font-lacquer font-bold text-center flex flex-wrap gap-6 text-7xl mx-12 pt-12">
        <motion.h1
          variants={container(0)}
          animate="bounce"
        >
          hi,
        </motion.h1>
        <motion.h1
          variants={container(0.15)}
          animate="bounce"
        >
          my
        </motion.h1>
        <motion.h1
          variants={container(0.3)}
          animate="bounce"
        >
          name
        </motion.h1>
        <motion.h1
          variants={container(0.45)}
          animate="bounce"
        >
          is
        </motion.h1>
        <motion.h1
          variants={container(0.6)}
          animate="bounce"
        >
          hendric
        </motion.h1>
      </div>
      <motion.article 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5 }}
        className="flex justify-center">
            <p className="pt-12 text-center w-10/12 sm:max-w-4xl">
            I consider myself an aspiring{" "}
            <strong>full stack web developer</strong>. Previously a cost
            planner/contract administrator in the construction industry. I{" "}
            <strong>design</strong>, <strong>manage</strong> and{" "}
            <strong>deliver</strong> projects with <strong>every pixel</strong> in
            mind. This is a glance at my software development journey so far. If
            you're interested in working together, have some feedback (or just
            wanted to say hello) please feel free to reach out, follow me on my
            socials or get in touch via the links below.
            </p>
      </motion.article>
      <a
        href={cv}
        target="_blank"
        alt="Download my CV"
        className=""
      >
        <button className="h-12 sm:w-80 border-2 border-black hover:bg-gradient-to-r hover:from-firstBlue hover:via-lastBlue hover:to-evenBlue bg-black text-white font-semibold rounded-2xl drop-shadow-custom duration-200 mt-6 px-8">
          Download CV
        </button>
      </a>
      <div className="flex justify-center gap-4 m-6 text-5xl">
        <a
          href="https://www.linkedin.com/in/hendric-widjaja/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Click to open a new tab to Hendric Widjaja's Linkedin"
        >
          <FaLinkedinIn className="bg-white hover:bg-evenBlue border-4 border-black rounded-full p-2 drop-shadow-custom hover:drop-shadow-custom-hov hover:scale-105 duration-200" />
        </a>
        <a
          href="https://github.com/hendricwidjaja"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Click to open a new tab to Hendric Widjaja's GitHub"
        >
          <TbBrandGithubFilled className="bg-white hover:bg-oddYellow border-4 border-black rounded-full p-2 drop-shadow-custom hover:drop-shadow-custom-hov hover:scale-105 duration-200" />
        </a>
        <a
          href="mailto:hcwidjaja@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Click to compose a new email to Hendric Widjaja"
        >
          <MdEmail className="bg-white hover:bg-evenBlue border-4 border-black rounded-full p-2 drop-shadow-custom hover:drop-shadow-custom-hov hover:scale-105 duration-200" />
        </a>
      </div>
    </div>
  );
};

export default Hero;
