import React from 'react'
import { HERO_CONTENT } from '../constants'
import profile from '../assets/profile-picture2.jpg'

const Hero = () => {
  return (
    <div className='flex-col place-items-center pt-28'>
        <div className='size-40 drop-shadow-custom hover:drop-shadow-custom-hov hover:scale-125 duration-200'>
            <img className='rounded-full border-[5px] border-black' src={profile} alt="Hendric Widjaja Profile Pic"/>
        </div>
        <div className='font-lacquer font-bold flex gap-6 text-6xl pt-12'>
            <h1 className='hover:-translate-y-3 hover:scale-110 duration-500'>hi,</h1>
            <h1 className='hover:-translate-y-3 hover:scale-110 duration-500'>my name</h1>
            <h1 className='hover:-translate-y-3 hover:scale-110 duration-500'>is hendric</h1>
        </div>
        <article className='pt-12 text-center max-w-4xl'>
            <p>I consider myself an aspiring <strong>full stack web developer</strong>. Previously a cost planner/contract administrator in the construction industry. I <strong>design</strong>, <strong>manage</strong> and <strong>deliver</strong> projects with <strong>every pixel</strong> in mind. This is a glance at my software development journey so far. If you're interested in working together, have some feedback (or just wanted to say hello) please feel free to reach out, follow me on my socials or get in touch via the links below.</p>
        </article>
    </div>
  )
}

export default Hero