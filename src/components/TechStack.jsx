import React from "react";
import briefcase from "../assets/heading-icons/expertise-icon.svg";
import { FaScrewdriverWrench } from "react-icons/fa6";

import css from "../assets/tech-stack/css-icon.webp";
import html from "../assets/tech-stack/html-icon.webp";
import js from "../assets/tech-stack/js-icon.webp";
import react from "../assets/tech-stack/react-icon.webp";
import python from "../assets/tech-stack/python-icon.webp";
import flask from "../assets/tech-stack/flask-icon.svg";
import node from "../assets/tech-stack/node-js-icon.webp";
import express from "../assets/tech-stack/express-icon.svg";
import postgresql from "../assets/tech-stack/postgresql.svg";
import mongodb from "../assets/tech-stack/mongodb-icon.webp";
import git from "../assets/tech-stack/git-red-icon.webp";
import github from "../assets/tech-stack/github.svg";
import netlify from "../assets/tech-stack/netlify-icon.png";
import vscode from "../assets/tech-stack/visual-studio-code-icon.webp";

const TechStack = () => {
  return (
    <div className="flex flex-col md:flex-row md:gap-10 justify-center items-center mx-auto px-4 gap-6">
      <div id="techstackheading" className="flex-col text-center items-center">
        <h1 className="pt-12 font-lacquer font-bold text-9xl">tech</h1>
        <div className="flex justify-center items-center gap-3">
          <h1 className="font-lacquer font-bold text-7xl">stack</h1>
          <img className="size-20" src={briefcase} alt="Briefcase Icon"></img>
        </div>
        <div className="flex gap-2 justify-center font-bold text-sm sm:text-md mt-2">
          <h3>Some of the</h3>
          <span>
            <FaScrewdriverWrench />
          </span>
          <h3>I use on a weekly basis</h3>
        </div>
      </div>
      <section id="tech-stack-grid" className="flex-col md:pt-16 px-8">
        <div
          id="tech-stack-icons"
          className="flex gap-4 sm:gap-8 justify-center bg-white border-black border-2 rounded-2xl mb-4 py-2 px-4 drop-shadow-custom"
        >
            <img src={html} alt="html" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
            <img src={css} alt="css" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
            <img src={js} alt="js" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
            <img src={react} alt="react" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
        </div>
        <div
          id="tech-stack-icons"
          className="flex gap-4 sm:gap-8 justify-center bg-white border-black border-2 rounded-2xl mb-4 py-2 px-4 drop-shadow-custom"
        >
            <img src={python} alt="python" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
            <img src={flask} alt="flask" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
            <img src={node} alt="node" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
            <img src={express} alt="express" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
        </div>
        <div
          id="tech-stack-icons"
          className="flex gap-4 sm:gap-8 justify-center bg-white border-black border-2 rounded-2xl mb-4 py-2 px-4 drop-shadow-custom"
        >
            <img src={postgresql} alt="Postgresql Icon by Icon Mafia" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
            <img src={mongodb} alt="mongodb" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
        </div>
        <div
          id="tech-stack-icons"
          className="flex gap-4 sm:gap-8 justify-center bg-white border-black border-2 rounded-2xl mb-4 py-2 px-4 drop-shadow-custom"
        >
            <img src={git} alt="git" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
            <img src={github} alt="github" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
            <img src={netlify} alt="netlify" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
            <img src={vscode} alt="vscode" className="h-10 hover:scale-110 hover:-translate-y-1 duration-300"></img>
        </div>
      </section>
    </div>
  );
};

export default TechStack;
