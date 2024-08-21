import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter, FaWhatsapp} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import Logo from '../assets/slogo.png'
import {Link} from 'react-scroll'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#e8b474] text-[#faf2eb]'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: "70px"}}/>
        </div>

        {/*Menu*/}
            <ul className='hidden md:flex'>
                <li className='text-[#faf2eb] hover:bg-orange-900 hover:text-[#faf2eb] hover:border-[#e8b474] duration-300'><Link  to="home"  smooth={true} duration={500} >
                     Home
                     </Link>
                </li>
                <li className='text-[#faf2eb] hover:bg-orange-900 hover:text-[#faf2eb] hover:border-[#e8b474] duration-300'><Link  to="about"  smooth={true} duration={500} >
                     About
                     </Link></li>
                <li className='text-[#faf2eb] hover:bg-orange-900 hover:text-[#faf2eb] hover:border-[#e8b474] duration-300'><Link  to="skills"  smooth={true} duration={500} >
                     Skills
                     </Link></li>
                <li className='text-[#faf2eb] hover:bg-orange-900 hover:text-[#faf2eb] hover:border-[#e8b474] duration-300'><Link  to="work"  smooth={true} duration={500} >
                     Work
                     </Link></li>
                <li className='text-[#faf2eb] hover:bg-orange-900 hover:text-[#faf2eb] hover:border-[#e8b474] duration-300'><Link  to="contact"  smooth={true} duration={500} >
                     Contact
                     </Link></li>

            </ul>

        {/*HamBugger*/}
        <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars/> : <FaTimes/>}
        </div>

        {/*Mobile Menu*/}

        <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#e8b474] flex flex-col justify-center items-center '}>
            <li className='py-6 text-4xl hover:bg-orange-900 hover:text-[#faf2eb] hover:border-[#e8b474]'>
                <Link onClick={handleClick} to="home"  smooth={true} duration={500} >
                     Home
                     </Link></li>
            <li className='py-6 text-4xl hover:bg-orange-900 hover:text-[#faf2eb] hover:border-[#e8b474]'>
                <Link onClick={handleClick} to="about"  smooth={true} duration={500} >
                     About
                     </Link></li>
            <li className='py-6 text-4xl hover:bg-orange-900 hover:text-[#faf2eb] hover:border-[#e8b474]'>
                <Link onClick={handleClick}  to="skills"  smooth={true} duration={500} >
                     Skills
                     </Link></li>
            <li className='py-6 text-4xl hover:bg-orange-900 hover:text-[#faf2eb] hover:border-[#e8b474]'>
                <Link onClick={handleClick} to="work"  smooth={true} duration={500} >
                     Work
                     </Link></li>
            <li className='py-6 text-4xl hover:bg-orange-900 hover:text-[#faf2eb] hover:border-[#e8b474]'>
                <Link onClick={handleClick} to="contact"  smooth={true} duration={500} >
                     Contact
                     </Link></li>
        </ul>

        {/*Social Icons*/}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                    <a className='flex justify-between items-center w-full text text-gray-50'
                        href="http://linkedin.com/in/uche-daniel-ck">LinkedIn <FaLinkedin size={30} />
                        
                        
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-400'>
                    <a className='flex justify-between items-center w-full text text-gray-50'
                        href="http://https://x.com/S0liddreams">Twitter <FaTwitter size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-500'>
                    <a className='flex justify-between items-center w-full text text-gray-50'
                        href="http://https://github.com/S0liddreams">Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-400'>
                    <a className='flex justify-between items-center w-full text text-gray-50'
                        href="http://wa.link/rh0zam">WhatsApp <FaWhatsapp size={30} />
                    </a>
                </li>

            </ul>

        </div>

    </div>
  )
}

export default Navbar