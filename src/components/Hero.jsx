import React from 'react';
import { HERO_CONTENT } from '../constants';
import profile from '../assets/profile-picture2.jpg';
import cv from '../assets/Hendric_Widjaja_CV.pdf';

import { FaLinkedinIn } from "react-icons/fa6";
import { TbBrandGithubFilled } from "react-icons/tb";
import { MdEmail } from "react-icons/md";


const Hero = () => {
  return (
    <div className='flex-col place-items-center pt-36'>
        <div className='size-60 sm:size-52 drop-shadow-custom hover:drop-shadow-custom-hov hover:scale-110 duration-300'>
            <img className='rounded-full border-[5px] border-black' src={profile} alt="Hendric Widjaja Profile Pic"/>
        </div>
        <div className='font-lacquer font-bold text-center sm:flex gap-6 text-7xl sm:text-6xl pt-12'>
            <h1 className='hover:-translate-y-3 hover:scale-110 duration-300'>hi,</h1>
            <h1 className='hover:-translate-y-3 hover:scale-110 duration-300'>my name</h1>
            <h1 className='hover:-translate-y-3 hover:scale-110 duration-300'>is hendric</h1>
        </div>
        <article className='pt-12 text-center w-10/12 sm:max-w-4xl'>
            <p>I consider myself an aspiring <strong>full stack web developer</strong>. Previously a cost planner/contract administrator in the construction industry. I <strong>design</strong>, <strong>manage</strong> and <strong>deliver</strong> projects with <strong>every pixel</strong> in mind. This is a glance at my software development journey so far. If you're interested in working together, have some feedback (or just wanted to say hello) please feel free to reach out, follow me on my socials or get in touch via the links below.</p>
        </article>
        <a href={cv} target="_blank" alt="Download my CV">
            <button className='h-12 sm:w-80 bg-black text-white font-semibold rounded-2xl drop-shadow-custom hover:scale-105 duration-200 hover:drop-shadow-custom-hov mt-6 px-8'>
                Download CV
            </button>
        </a>
        <div className='flex gap-4 m-6 text-5xl'>
            <a href="https://www.linkedin.com/in/hendric-widjaja/" target="_blank" rel="noopener noreferrer" aria-label="Click to open a new tab to Hendric Widjaja's Linkedin">
                <FaLinkedinIn className='border-4 border-black rounded-full p-2 drop-shadow-custom hover:drop-shadow-custom-hov hover:scale-105 duration-200'/>
            </a>
            <a href="https://github.com/hendricwidjaja" target="_blank" rel="noopener noreferrer" aria-label="Click to open a new tab to Hendric Widjaja's GitHub">
                <TbBrandGithubFilled className='border-4 border-black rounded-full p-2 drop-shadow-custom hover:drop-shadow-custom-hov hover:scale-105 duration-200'/>
            </a>
            <a href="mailto:hcwidjaja@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Click to compose a new email to Hendric Widjaja">
                <MdEmail className='border-4 border-black rounded-full p-2 drop-shadow-custom hover:drop-shadow-custom-hov hover:scale-105 duration-200'/>
            </a>
        </div>
    </div>
  )
}

export default Hero