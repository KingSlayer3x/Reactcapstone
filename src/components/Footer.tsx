import React from 'react'

export default function Footer() {
  return (
    <div className='m-5'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-center ml-3'>
            <div className='order-last md:order-first lg:w-[80%] md:w-[70%] w-[50%]'>
                <img src="./Mario-and-Adrian.jpg" className='p-1 rounded-4xl text-center' alt="" />
            </div>
            <div className='flex flex-col'>
                <h2 className='text-4xl font-markazi'>Navigation</h2>
                <a href="#home">Home</a>
                <a href="">About</a>
                <a href="">Menu</a>
                <a href="">Order Online</a>
                <a href="">Login</a>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-4xl font-markazi'>Contact</h2>
                <a href="#home">Home</a>
                <a href="">About</a>
                <a href="">Menu</a>
                <a href="">Order Online</a>
                <a href="">Login</a>
            </div>
            <div className='flex flex-col'>
                <h2 className='text-4xl font-markazi'>Social Media</h2>
                <a href="">Facebook</a>
                <a href="">WhatsApp</a>
                <a href="">Instagram</a>
                <a href="">Pintrest</a>
            </div>
        </div>
    </div>
  )
}
