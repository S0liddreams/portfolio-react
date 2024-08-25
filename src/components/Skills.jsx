import React from 'react'
import HTML from '../assets/html.png';
import JAVASCRIPT from '../assets/javascript.png';
import REACT from '../assets/react.png';
import TAILWIND from '../assets/tailwind.png';
import GITHUB from '../assets/github.png';
import NODE from '../assets/node.png';
import MONGO from '../assets/mongo.png';
import WORDPRESS from '../assets/wordpress.png';
import FIGMA from '../assets/figma.png';
import GIS from '../assets/gis1.png';


const Skills = () => {
  return (
    <div name='skills' className='w-full h-fit bg-[#e8b474] text-[#faf2eb]'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-orange-900 '>Skills</p>
                <p className='py-4'>These are the Technologies I've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#383434]'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML Icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#383434]'>
                    <img className='w-20 mx-auto' src={JAVASCRIPT} alt="JAVASCRIPT Icon"/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#383434]'>
                    <img className='w-20 mx-auto' src={REACT} alt="REACT Icon"/>
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#383434]'>
                    <img className='w-20 mx-auto' src={TAILWIND} alt="TAILWIND Icon"/>
                    <p className='my-4'>TAILWINDCSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#383434]'>
                    <img className='w-20 mx-auto' src={GITHUB} alt="GITHUB Icon"/>
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#383434]'>
                    <img className='w-20 mx-auto' src={NODE} alt="NODE Icon"/>
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#383434]'>
                    <img className='w-20 mx-auto' src={MONGO} alt="MONGO Icon"/>
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#383434]'>
                    <img className='w-20 mx-auto' src={WORDPRESS} alt="WORDPRESS Icon"/>
                    <p className='my-4'>WORDPRESS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#383434]'>
                    <img className='w-20 mx-auto' src={FIGMA} alt="FIGMA Icon"/>
                    <p className='my-4'>FIGMA</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#383434]'>
                    <img className='w-20 mx-auto' src={GIS} alt="GIS Icon"/>
                    <p className='my-4'>GIS</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills