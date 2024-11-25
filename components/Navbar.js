"use client"
import React, { useState, useEffect, memo } from 'react'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"


const Navbar = () => {

    const [dropdownstate, setDropdownstate] = useState(false)
    const [firstvisit, setFirstvisit] = useState(false)

    const [animation, setAnimation] = useState(true)
    useEffect(() => {
        setAnimation(false);
    }, [])




    useEffect(() => {
        setFirstvisit(true);

        const handleClick = () => {
            if (dropdownstate) {
                HandletoggleDropdown();
            }
        };

        // Add event listener
        document.body.addEventListener('click', handleClick);

        // Cleanup function
        return () => {
            document.body.removeEventListener('click', handleClick);
        };
    }, [dropdownstate]);

    const { data: session } = useSession();


    const HandletoggleDropdown = () => {
        setDropdownstate(prevstate => !prevstate);
    }



    const To_Display = () => {
        if (session) {
            return (
                <>

                    <button className='flex items-center justify-center gap-2' id='dropdownNavbarLink' onClick={() => { HandletoggleDropdown(); setFirstvisit(false) }}>
                        <img src={session.user.image} alt="Profile"
                            className='w-12 rounded-full shadow-sm hover:shadow-md md:min-w-10'
                        />
                        <svg className={`${firstvisit ? 'animate-bounce' : 'animate-none'} rounded-full shadow-sm md:min-w-5`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div id="dropdown" className={`dropmenu z-10 ${dropdownstate ? 'block' : 'hidden'} absolute  bg-gray-100 mt-3 p-2 rounded-lg shadow-2xl 
                            md:right-6 lg:right-9 `}>
                        <ul className='py-2 text-sm text-gray-700 dark:text-gray-400 flex flex-col gap-2 md:gap-5'>
                            <Link href="/dashboard">
                                <li className='text-lg text-black font-normal hover:bg-gray-300 hover:shadow-lg text-center rounded-lg p-2 px-8 md:px-2 '>Dashboard</li>
                            </Link>
                            <Link href="/passwords">
                                <li className='text-lg text-black font-normal hover:bg-gray-300 hover:shadow-lg text-center rounded-lg p-2 px-8 md:px-2'>Passwords</li>
                            </Link>

                            <Link href="/login">
                                <li className='flex items-center justify-center mt-2'>

                                    <button className='linkBtn flex items-center justify-between gap-2 text-lg hover:shadow-lg' >Log Out
                                        <svg className='invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                            <path d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>
                                </li>
                            </Link>
                        </ul>
                    </div>
                </>
            )
        } else {
            return (

                <Link href="/login">
                    <button className='inline p-2 px-4 bg-black  text-center
                     text-white border rounded-md shadow-sm hover:shadow-lg md:text-sm md:py-3 sm:text-sm'>Log In</button>
                </Link>
            )
        }
    }

    return (
        <div className='flex items-center' >

            {/* /////////////// ANIMATION //////////////////////// */}
            <div className={`Protection fixed w-screen h-screen top-0 left-0 duration-700 
            ${animation ? 'opacity-1 z-20  backdrop-blur-xl' : 'opacity-0 -z-10  backdrop-blur-none'}
            flex items-center justify-center filter `}>
                <img src="./protection.png" alt="Home Img"
                    className='w-72' />
            </div>

            <nav className='bg-white w-full p-8 py-auto flex justify-around align-middle md:px-2 md:py-7'>
                <Link href="/dashboard">
                    <div className='text-2xl text-black font-bold flex items-center justify-center gap-4 '>
                        <img src="./protection.png" alt="icon"
                            className='w-12 filter drop-shadow-md hover:drop-shadow-lg md:min-w-10' />
                        <span className='md:invisible md:w-1'>Cryptonix</span>
                    </div>
                </Link>


                <ul className='text-xl text-black flex gap-10 justify-center items-center md:gap-3'>
                    <Link href="/passwords"><li className='filter  hover:drop-shadow-lg md:text-lg' >Passwords</li></Link>
                    <Link href="/dashboard#documents"><li className='filter  hover:drop-shadow-lg md:text-lg'>Documents</li></Link>
                    <Link href=""><li></li></Link>

                    <li><To_Display /></li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
