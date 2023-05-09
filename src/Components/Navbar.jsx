import Logo from '../Assets/logo1.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi';
import { useState } from 'react';
import {Link} from 'react-scroll'

function Navbar() {
  const [nav, setNav] = useState(false);

  const handleClick = () =>{
    setNav(!nav)
  }   
   return (
      <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#330a11] text-white'>
           <div>
            <img className='px-2 md:px-4' src={Logo} alt="Logo" style={{width: '200px'}}/>
           </div>

           {/* menu */}
                <ul className='hidden md:flex'>
                    <li>
                      <Link to="home" smooth={true} duration={500}>
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="about" smooth={true} duration={500}>
                        About
                      </Link>
                    </li>
                    <li>
                      <Link to="skills" smooth={true} duration={500}>
                        Skills
                      </Link>
                      </li>
                    <li>
                      <Link to="projects" smooth={true} duration={500}>
                        Projects
                      </Link>
                    </li>
                    <li>
                      <Link to="contact" smooth={true} duration={500}>
                        Contact
                      </Link>
                    </li>
                </ul>

           {/*hamburger  */}
           <div onClick={handleClick} className=' md:hidden z-10'>
            {nav ?  <FaTimes/>: <FaBars/>}
           </div>

           {/* mobile menu */}
           <ul className={nav ? 'fixed left-0 top-0 h-screen w-full flex flex-col justify-center items-center bg-[#330a11] ease-in-out duration-700' : ' fixed left-[100%] '}>
                <li className='py-6 text-4xl'>
                      <Link onClick={handleClick} to="home" smooth={true} duration={500}>
                        Home
                      </Link>
                </li>
                <li className='py-6 text-4xl'>
                      <Link onClick={handleClick} to="about" smooth={true} duration={500}>
                        About
                      </Link>
                </li>
                <li className='py-6 text-4xl'>
                      <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
                        Skills
                      </Link>
                </li>
                <li className='py-6 text-4xl'>
                      <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
                        Projects
                      </Link>
                </li>
                <li className='py-6 text-4xl'>
                      <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
                        Contact
                      </Link>
                </li>
            </ul>

            {/* social icons */}
            <div className=' hidden md:flex fixed flex-col top-[35%] left-0'>
              <ul>
                <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
                  <a className='flex justify-between items-center w-full text-gray-300' href="https://www.linkedin.com/in/anju-shrestha-37a1a5244
                  ">
                    LinkedIn <FaLinkedin size={30}/> 
                  </a>
                </li>
                <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                  <a className='flex justify-between items-center w-full text-gray-300' href="https://github.com/anju-shrestha
                  ">
                    Github <FaGithub size={30}/> 
                  </a>
                </li>
                <li className='w-[160px] h-[40px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                  <a className='flex justify-between items-center w-full text-gray-300' href="https://mail.google.com/mail/anjushresth1111">
                    Mail <HiOutlineMail size={30}/> 
                  </a>
                </li>
              </ul>
            </div>
      </div>
    );
  }
  
 export default Navbar;
  