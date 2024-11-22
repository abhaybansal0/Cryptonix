import React from 'react'
import Link from 'next/link'

const Navbar = () => {
    return (
        <div>
            <nav className='bg-white min-w-full p-8 py-auto flex justify-around align-middle'>
                <div className='text-lg text-black '>Cryptonix</div>


                <ul className='text-xl text-black flex gap-10 align-middle '>
                    <Link href=""><li>Passwords</li></Link>
                    <Link href=""><li>Vault</li></Link>
                    <Link href=""><li>Notes</li></Link>
                    <Link href=""><li>

                        <button className='inline p-2 px-4 bg-black  text-center text-white border rounded-md'>Log In</button>
                    </li></Link>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
