import React from 'react'


const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#e8b474] text-[#faf2eb] '>
        <div className=' flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-orange-900'>About
                    </p>
                </div>
                    <div> </div>
            </div>
                
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div className='sm:text-right text-4xl font-bold'>
                        <p>Hi. Welcome to my portfolio. Please take a look around.</p>
                    </div>
                    <div>
                        <p>
                        In my professional career, I have dedicated myself to helping clients discover and 
                        showcase their visual identities in the most effective way possible.
                        I have experience working with both small and large-scale businesses.
                        Throughout my numerous creative endeavors,
                        I firmly believe that a company's identity is as vital as its products and services.
                        </p>
                    </div>
                </div>
        </div>

    </div>
  )
}

export default About