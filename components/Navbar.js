"use client"
import React, { useState, useEffect, memo } from 'react'
import Link from 'next/link'
import { useSession, signOut } from "next-auth/react"


const Navbar = () => {

    useEffect(() => { setFirstvisit(true) }, [])
    
    const { data: session } = useSession();

    const [dropdownstate, setDropdownstate] = useState(false)
    const [firstvisit, setFirstvisit] = useState(false)

    const HandletoggleDropdown = () => {
        setDropdownstate(!dropdownstate);
    }

    document.body.addEventListener('click', ()=>{
        if(dropdownstate) HandletoggleDropdown();
    })

    const To_Display = () => {
        if (session) {
            return (
                <>

                    <button className='flex items-center justify-center gap-2' id='dropdownNavbarLink' onClick={() => {HandletoggleDropdown(); setFirstvisit(false)}}>
                        <img src={session.user.image} alt="Profile"
                            className='w-12 rounded-full'
                        />
                        <svg className={`${firstvisit ? 'animate-bounce' : 'animate-none'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                            <path d="M18 9.00005C18 9.00005 13.5811 15 12 15C10.4188 15 6 9 6 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                    <div id="dropdown" className={`dropmenu z-10 ${dropdownstate ? 'block' : 'hidden'} absolute  bg-slate-100 shadow mt-3 p-2 rounded-lg `}>
                        <ul className='py-2 text-sm text-gray-700 dark:text-gray-400 flex flex-col gap-2'>
                            <Link href="/dashboard">
                                <li className='text-lg text-black font-normla hover:bg-gray-300 text-center rounded-lg p-2 px-8'>Dashboard</li>
                            </Link>
                            <Link href="/passwords">
                                <li className='text-lg text-black font-normla hover:bg-gray-300 text-center rounded-lg p-2 px-8'>Passwords</li>
                            </Link>
                            <li className='flex items-center justify-center mt-2'>

                                <button className='linkBtn flex items-center justify-between gap-2 text-lg' onClick={() => signOut()}>Log Out
                                    <svg className='invert' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#000000"} fill={"none"}>
                                        <path d="M15 17.625C14.9264 19.4769 13.3831 21.0494 11.3156 20.9988C10.8346 20.987 10.2401 20.8194 9.05112 20.484C6.18961 19.6768 3.70555 18.3203 3.10956 15.2815C3 14.723 3 14.0944 3 12.8373L3 11.1627C3 9.90561 3 9.27705 3.10956 8.71846C3.70555 5.67965 6.18961 4.32316 9.05112 3.51603C10.2401 3.18064 10.8346 3.01295 11.3156 3.00119C13.3831 2.95061 14.9264 4.52307 15 6.37501" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M21 12H10M21 12C21 11.2998 19.0057 9.99153 18.5 9.5M21 12C21 12.7002 19.0057 14.0085 18.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </li>
                        </ul>
                    </div>
                </>
            )
        } else {
            return (

                <Link href="/login">
                    <button className='inline p-2 px-4 bg-black  text-center text-white border rounded-md'>Log In</button>
                </Link>
            )
        }
    }

    return (
        <div className='flex items-center' >
            <nav className='bg-white min-w-full p-8 py-auto flex justify-around align-middle'>
                <Link href="/dashboard">
                    <div className='text-2xl text-black font-bold flex items-center gap-4'><img src="./protection.png" alt="icon" className='w-12' />Cryptonix</div>
                </Link>


                <ul className='text-xl text-black flex gap-10 justify-center items-center'>
                    <Link href="#passwords"><li>Passwords</li></Link>
                    <Link href="/dashboard#documents"><li>Documents</li></Link>
                    <Link href=""><li></li></Link>

                    <li><To_Display /></li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
