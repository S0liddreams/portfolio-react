import React from 'react'
import LANDINGPAGE from '../assets/landingpage.png';
import MAPPING from '../assets/mapping.jpg';
import SOCIALMEDIA from '../assets/socialmedia.jpg';
import PRESSWEB from '../assets/pressweb.png';

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-[#faf2eb] bg-[#e8b474]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-[#faf2eb] border-orange-900 '>Work</p>
                <p className='py-6'>Check out some of my recent work</p>
            </div>

                    {/*Container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                      {/*Grid Item*/}
                <div style={{backgroundImage: `url(${LANDINGPAGE})`}} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>
                        {/*Hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tacking-wider'>
                            REACT JS APPLICATION
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-orange-900 text-[#faf2eb] font-bold text-lg'>Demo</button>
                             </a>
                            

                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${MAPPING})`}} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>
                        {/*Hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tacking-wider'>
                            GIS APPLICATION
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-orange-900 text-[#faf2eb] font-bold text-lg'>Demo</button>
                             </a>
                             

                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${SOCIALMEDIA})`}} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>
                        {/*Hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tacking-wider'>
                            SOCIAL MEDIA APP
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-orange-900 text-[#faf2eb] font-bold text-lg'>Demo</button>
                             </a>
                             

                        </div>
                    </div>
                </div>

                <div style={{backgroundImage: `url(${PRESSWEB})`}} className='shadow-lg shadow-[#040c16] group container rounded-md  flex justify-center items-center mx-auto content-div'>
                        {/*Hover effect*/}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tacking-wider'>
                            WORDPRESS APP
                        </span>

                        <div className='pt-8 text-center'>
                            <a href="/">
                             <button className='text-center rounded-lg px-4 py-3 m-2 bg-orange-900 text-[#faf2eb] font-bold text-lg'>Demo</button>
                             </a>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Work