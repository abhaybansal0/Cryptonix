import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='flex flex-col justify-center align-middle bg-white text-slate-900 mt-10 pb-5 gap-3'>
      <div className="medialinks text-center flex items-center justify-center gap-10">

        <a href="https://www.instagram.com/abhay.bansa1?igsh=MWw2dHQ2bnQ3bWVtMg==" target='__blank'><img src="./instagram.png" alt="insta" className='w-6 ' /></a>
        <a href="https://www.linkedin.com/in/abhay-bansal-84a97622a/" target='__blank'><img src="./linkedin.png" alt="linkedin" className='w-6' /></a>
        <a href="https://github.com/abhaybansal0" target='__blank'><img src="./github.png" alt="github" className='w-6' /></a>
        <a href="https://x.com/AbhayBansal127" target='__blank'><img src="twitter.png" alt="X" className='w-6' /></a>
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
}

export default Footer
