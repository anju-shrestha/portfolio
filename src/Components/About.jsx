import React from 'react'

const About = () => {
  return (
    <div name='about' className='h-screen w-full bg-[#330a11] text-white'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className=' pb-8 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full px-4 text-justify'>
                <div>
                    <p>
                        Welcome to my portfolio.
                    </p>
                    <br />
                    <p>
                        I did BA from IGNOU. I have learned web development from udemy. I have always been passionate about learning new things that challenge my ability and knowledge, and I am excited to share my work with you here. Over the months I have gained some experience in Frontend Web Developent. And I am constantly learning and growing in this field. Now I am open to work on front-end development. <br/>
                        In this portfolio you will find selection of my work. And I hope this will give you a hint of my skills and abilities.
                    </p>
                    <br />
                    <p>
                        Thank you for taking the time to view my portfolio and I hope you enjoy browsing through my work. &#128522;
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About
