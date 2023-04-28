import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='h-screen w-full bg-[#330a11] text-white'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-500'>Hi, My name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Anju Shrestha.</h1>
            <h2 className='text-4xl sm:7xl font-bold text-[#8892b0] '>I am a Front-end Developer.</h2>
            <p className='text-[#8892b0] mx-w-[700px] py-4'>I am a front-end developer, practicing in building responsive webpage with react. Currently I'm focused on creatiing responsive front-end web application. Well, I don't have any work experience in web-development. But I have potential to learn new things and I am confident that I could learn anything succesfullly and exceed your expectation.</p>
            <div>
                <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:border-pink-500'>
                    View Work 
                    <span className='group-hover:rotate-90 duration-300 group-hover:text-pink-500'>
                        <HiArrowNarrowRight className='ml-3'/>
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Home
