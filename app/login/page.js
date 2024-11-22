import React from 'react'
import Link from 'next/link'
import './page.css'

const Login = () => {
    return (
            <div className='flex flex-col justify-center items-center gap-12
                 w-screen h-screen bg-white text-black text-4xl
                 text-center'>
                <div>

                    Please Log in With Your
                    <span className='max-w-fit mx-3 hilightgoogel'>
                        Google
                    </span>
                    Account.

                </div>
                <Link href="/">
                <button className='bg-black text-white w-fit py-4 px-8 border rounded-full '>Log In</button>
                </Link>
            </div>
    )
}

export default Login
