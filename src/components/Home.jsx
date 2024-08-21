import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import BACKGROUND from '../assets/background.jpg'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-cover' style={{backgroundImage: `url(${BACKGROUND})`}}>

        {/*Container*/}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-[#faf2eb] text-[20px]'>Hi, my name is</p>
            <h1 className='text-4xl sm:text-7xl font-bold text-orange-900'>Uche Chukwuemeka</h1>
            <h2 className='text-4xl sm:text-7xl font-bold text-[#faf2eb]'>I'm a Full Stack Developer.</h2>
            <p className='text-gray-200 font-bold text-2xl py-4 max-w-[700px] mt-4'>I'm a Web Developer and i build accessible and responsive web applications.
               </p>
                <div>
                    <button className='text-[#faf2eb] group border-2 px-6 py-3 my-2 flex items-center hover:bg-orange-900 hover:border-orange-900'><Link  to="work"  smooth={true} duration={500} >View Work</Link>
                        <span className='group-hover:rotate-90 duration-300'>
                        <HiArrowNarrowRight className='ml-3'/>
                        </span>
                    </button>
                </div>
        </div>

    </div>
  )
}

export default Home