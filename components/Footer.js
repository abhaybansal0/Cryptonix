import React from 'react'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='flex flex-col justify-center align-middle bg-white text-slate-900 py-10 gap-5'>
      <div className="medialinks text-center">
        {/* <img
          src="@/app/assets/images/insta.svg"
          alt="Picture of the author"
          width={50}
          height={50}
        /> */}
        HERE____HERE____HERE____HERE
      </div>

      <div className="footerlinks text-center px-auto mx-auto ">
        <ul className='flex gap-4'>
          <a href=""><li>Home</li></a>
          <a href=""><li>Services</li></a>
          <a href=""><li>About</li></a>
          <a href=""><li>Privacy Policy</li></a>
          <a href=""><li>Security</li></a>
        </ul>

        <h4 className='text-slate-600 text-md mt-4'>Cruptonix @ 2024</h4>
      </div>
    </div>
  )
}

export default Footer
