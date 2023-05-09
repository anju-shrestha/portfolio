import React from 'react'
import Html from '../Assets/html.png'
import Css from '../Assets/css.png'
import JavaScript from '../Assets/javascript.png'
import Tailwind from '../Assets/tailwind.png'
import ReactImg from '../Assets/react.png'
import Bootstrap from '../Assets/Bootstrap_logo.svg.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-[#330a11] text-white w-full h-screen'>
        {/* container */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl inline font-bold border-b-4 border-pink-600'>Skills</p>
                <p className='py-4'>These are the technologies I've worked with.</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4 ' src={Html} alt="Html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Css} alt="Html icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={JavaScript} alt="Html icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Tailwind} alt="Html icon" />
                    <p className='my-4'>TailWind</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={Bootstrap} alt="Html icon" />
                    <p className='my-4'>Bootstrap</p>
                </div>
                <div className='shadow-md shadow-black hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto pt-4' src={ReactImg} alt="Html icon" />
                    <p className='my-4'>React</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Skills
