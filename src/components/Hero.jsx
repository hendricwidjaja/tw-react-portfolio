import React from 'react'
import { HERO_CONTENT } from '../constants'
import profile from '../assets/profile-picture2.jpg'

const Hero = () => {
  return (
    <div className='flex-col place-items-center pt-28'>
        <div className='size-40'>
            <img className='rounded-full border-4 border-black' src={profile} alt="Hendric Widjaja Profile Pic"/>
        </div>
        <div className='font-lacquer flex gap-2 text-5xl'>
            <h1>hi,</h1>
            <h1>my name is</h1>
            <h1>hendric</h1>
        </div>
        <article>
            <p>{HERO_CONTENT}</p>
        </article>
    </div>
  )
}

export default Hero