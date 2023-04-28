import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#330a11] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/a34d0d9a-a939-4a45-9ab4-5177e8b45626" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//Submit the form below or shoot me an email - anjushresth1111@gmail.com</p>
            </div>
            <input type="text" placeholder='Name' name='Name' className='bg-[#ccd6f6] p-2' />
            <input type="email" placeholder='Email' name='Email' className='my-4 p-2 bg-[#ccd6f6]'/>
            <textarea name="message" rows="10" className='bg-[#ccd6f6] p-2' placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect</button>
        </form>

      
    </div>
  )
}

export default Contact
