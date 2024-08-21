import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#e8b474] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/bgdyvkka" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-orange-900 text-[#faf2eb]'>Contact</p>
                <p className='text-[#faf2eb] py-4'>Submit the form bellow or send me an e-mail</p>
            </div>
            <input className='p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2' type="email" placeholder='Email' name='email' />
            <textarea className='p-2' name="message"  rows="10" placeholder='Message'></textarea>
            <button className='text-[#faf2eb] border-2 bg-orange-900 hover:bg-[#faf2eb] hover:text-orange-900 hover:border-orange-900 px-4 py-3 my-8 mx-auto flex items-center '>Submit</button>
        </form>

    </div>
  )
}

export default Contact