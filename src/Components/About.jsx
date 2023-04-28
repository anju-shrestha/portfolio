import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen w-full bg-[#330a11] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold '>
                    <p>Hi, I'm Anju, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p>I did BA from IGNOU. I am passionate about learning new things that challenge my ability and knowledge. I have learned web development from udemy. Now I am open to work on front-end development. </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
