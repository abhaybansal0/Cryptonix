import React, { memo } from 'react'
import Image from 'next/image'


const Footer = memo(() => {
  return (
    <div className='flex flex-col justify-center align-middle bg-white text-slate-900 mt-10 pb-5 gap-3'>
      <div className="medialinks text-center flex items-center justify-center gap-10">

        <img src="./instagram.png" alt="insta" className='w-6 ' />
        <img src="./linkedin.png" alt="linkedin" className='w-6' />
        <img src="./github.png" alt="github" className='w-6' />
        <img src="twitter.png" alt="X" className='w-6' />
      </div>

      <div className="footerlinks text-center px-auto mx-auto ">
        <ul className='flex gap-4'>
          <a href=""><li>Home</li></a>
          <a href=""><li>Services</li></a>
          <a href=""><li>About</li></a>
          <a href=""><li>Privacy Policy</li></a>
          <a href=""><li>Security</li></a>
        </ul>

        <h4 className='text-slate-600 text-md mt-2'>Cruptonix @ 2024</h4>
      </div>
    </div>
  )
})

export default Footer
